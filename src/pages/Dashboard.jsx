import React, { useContext, useMemo } from 'react';
import Hero from '../components/dashboard/Hero';
import ChartCard from '../utils/chart-config';
import QuickActionsCard from '../components/dashboard/QuickActionsCard';
import DashCardContainer from '../components/dashboard/DashCardContainer';
import useDashboardOverview from '../hooks/api/useDashboardOverview';
import { AuthContext } from '../context/AuthContext';

const BASE_COLORS = ['#1E40AF', '#30C93B', '#E2C044', '#F97316', '#6366F1'];

const defaultChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 8,
        font: { size: 12 },
      },
    },
  },
};

const createLineOptions = () => ({
  ...defaultChartOptions,
  scales: {
    x: { ticks: { maxRotation: 45, autoSkip: true } },
    y: { ticks: { beginAtZero: true } },
  },
});

const createBarOptions = () => ({
  ...defaultChartOptions,
  scales: {
    x: { ticks: { autoSkip: false } },
    y: { beginAtZero: true },
  },
});

const createHorizontalBarOptions = (maxValue = 10) => ({
  ...defaultChartOptions,
  indexAxis: 'y',
  scales: {
    x: {
      beginAtZero: true,
      max: Math.max(maxValue * 1.1, 10),
      display: false,
    },
    y: {
      ticks: { font: { size: 14 }, padding: 12 },
      display: true,
    },
  },
});

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

function Dashboard() {
  const { admin } = useContext(AuthContext);
  const { data, loading, error } = useDashboardOverview();

  const stats = data?.cards ?? {
    totalUsers: 0,
    totalEmployees: 0,
    totalCourses: 0,
    totalRevenue: 0,
  };

  const revenueChartData = useMemo(() => {
    const labels = data?.revenueTrends?.map((item) => {
      const date = new Date(item.date);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }) ?? [];

    const datasetData = data?.revenueTrends?.map((item) =>
      Number(item.revenue ?? 0)
    ) ?? [];

    return {
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: datasetData,
          borderColor: BASE_COLORS[0],
          backgroundColor: 'rgba(30, 64, 175, 0.3)',
          fill: true,
          borderWidth: 1.5,
          pointRadius: 2,
          tension: 0.4,
        },
      ],
    };
  }, [data]);

  const enrollmentBarData = useMemo(() => {
    const labels = data?.courseEnrollments?.map((item) => item.month) ?? [];
    const datasetData = data?.courseEnrollments?.map((item) =>
      Number(item.count ?? 0)
    ) ?? [];

    return {
      labels,
      datasets: [
        {
          label: 'Enrollments',
          data: datasetData,
          backgroundColor: BASE_COLORS[1],
          borderRadius: 6,
        },
      ],
    };
  }, [data]);

  const recentActivitiesData = useMemo(() => {
    const recent = data?.recentActivities ?? {
      newEnrollments: 0,
      newUsers: 0,
      newEmployees: 0,
    };
    return {
      labels: ['New Enrollments', 'New Users', 'New Employees'],
      datasets: [
        {
          data: [recent.newEnrollments, recent.newUsers, recent.newEmployees],
          backgroundColor: BASE_COLORS.slice(0, 3),
        },
      ],
    };
  }, [data]);

  const topCoursesData = useMemo(() => {
    const courses = data?.topCourses ?? [];
    const labels = courses.map((course) => course.title ?? 'Untitled');
    const values = courses.map((course) => Number(course.enrollments ?? 0));

    return {
      labels,
      datasets: [
        {
          label: 'Enrollments',
          data: values,
          backgroundColor: labels.map(
            (_, idx) => BASE_COLORS[idx % BASE_COLORS.length]
          ),
          borderRadius: 6,
          barPercentage: 0.8,
          categoryPercentage: 0.8,
        },
      ],
    };
  }, [data]);

  const topCoursesMax = useMemo(() => {
    const courses = data?.topCourses ?? [];
    if (!courses.length) return 10;
    return Math.max(...courses.map((course) => Number(course.enrollments ?? 0)));
  }, [data]);

  const heroName = admin?.username || admin?.name || admin?.email || 'Admin';
  const formattedRevenue = formatCurrency(stats.totalRevenue || 0);

  return (
    <>
      <Hero title={heroName} img="./dash-hero-img.png">
        Stay on top of your academy with real-time insights into growth,
        revenue, and team impact. Your latest revenue is {formattedRevenue}.
      </Hero>

      <div className="overveiw mt-10">
        <h1 className="my-10 font-bold text-2xl capitalize">overview</h1>

        <DashCardContainer type="dash" stats={stats} />

        <div className="ml-5 mt-5">
          {error && (
            <div className="mb-4 rounded-md bg-red-100 p-3 text-red-700">
              {error.message}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-20 text-gray-500">
              Loading dashboard data...
            </div>
          ) : (
            <>
              <div className="flex w-full flex-wrap gap-4 mt-5 pb-5">
                <div className="w-full lg:w-[48%]">
                  <ChartCard
                    type="line"
                    title="Revenue Trends (30 days)"
                    data={revenueChartData}
                    options={createLineOptions()}
                  />
                </div>
                <div className="w-full lg:w-[48%]">
                  <ChartCard
                    type="bar"
                    title="Course Enrollments (6 months)"
                    data={enrollmentBarData}
                    options={createBarOptions()}
                  />
                </div>
              </div>

              <div className="flex w-full flex-wrap gap-4 mt-5 pb-5">
                <div className="w-full lg:w-[48%]">
                  <ChartCard
                    type="doughnut"
                    title="Recent Activities (24h)"
                    data={recentActivitiesData}
                    options={defaultChartOptions}
                  />
                </div>
                <div className="w-full lg:w-[48%]">
                  <ChartCard
                    type="bar"
                    title="Top Performing Courses (30 days)"
                    data={topCoursesData}
                    options={createHorizontalBarOptions(topCoursesMax)}
                  />
                </div>
              </div>

              <QuickActionsCard title="quick links" />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;