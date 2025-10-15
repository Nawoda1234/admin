'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Users, DollarSign, TrendingUp, Calendar, BookOpen, UserCheck, Clock, AlertCircle } from 'lucide-react'

export default function AdminDashboardClient() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Users"
            value={4}
            subtitle="Active Users"
            icon={<Users size={32} />}
            color="blue"
            
            
          />
          <StatCard
            title="Workout"
            value=""
            subtitle="This month Workout"
            icon={<DollarSign size={32} />}
            color="green"
            
          />
          <StatCard
            title="Meal Plans"
            value={""}
            subtitle="This Month Meal plan"
            icon={<BookOpen size={32} />}
            color="purple"
            
            
          />
          <StatCard
            title="Recent Activity"
            value=""
            subtitle="Recent Activity Users"
            icon={<TrendingUp size={32} />}
            color="red"
            trend={{  }}
            delay={0.3}
          />
        </div>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ProgressCard
            title=" ALL users"
            current={856}
            target={1000}
            unit=" students"
            color="blue"
            delay={0.4}
          />
          <ProgressCard
            title="Meal plan"
            current={73}
            target={85}
            unit="Add the meals"
            color="green"
            delay={0.5}
          />
          <ProgressCard
            title="Work out"
            current={45678}
            target={60000}
            unit="Add work out plan"
            color="purple"
            delay={0.6}
          />
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              icon={<UserCheck size={20} />}
              type="New User Enrolled"
              date="2 minutes ago"
              notes="Janith Wick"
            />
            <ActivityItem
              icon={<BookOpen size={20} />}
              type="New User Enrolled"
              date="15 minutes ago"
              notes="Sarah Smith completed Introduction to TypeScript"
            />
            <ActivityItem
              icon={<DollarSign size={20} />}
              type="New User ENrolled"
              date="1 hour ago"
              notes="$299 from Michael Johnson"
            />
            <ActivityItem
              icon={<Calendar size={20} />}
              type="New User ENrolled"
              date="2 hours ago"
              notes="Live Q&A Session: React Best Practices"
            />
            
          </div>
        </motion.div>
      </div>
    </div>
  )
}

type StatCardProps = {
  title: string
  value: number | string
  subtitle?: string
  icon: React.ReactNode
  color: 'blue' | 'red' | 'green' | 'purple'
  trend?: { value: number; label: string }
  delay?: number
}

type ProgressCardProps = {
  title: string
  current: number
  target: number
  unit: string
  color: 'blue' | 'red' | 'green' | 'purple'
  delay?: number
}

type ActivityItemProps = {
  icon: React.ReactNode
  type: string
  date: string
  notes?: string
}

// ✅ StatCard
export function StatCard({ title, value, subtitle, icon, color, trend, delay = 0 }: StatCardProps) {
  const colorConfig: Record<'blue' | 'red' | 'green' | 'purple', { border: string; text: string }> = {
    blue: { border: 'border-blue-500', text: 'text-blue-500' },
    red: { border: 'border-red-500', text: 'text-red-500' },
    green: { border: 'border-green-500', text: 'text-green-500' },
    purple: { border: 'border-purple-500', text: 'text-purple-500' },
  }

  const { border, text } = colorConfig[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`bg-white p-5 rounded-lg shadow-sm border-l-4 ${border}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
        <div className={text}>{icon}</div>
      </div>
      {trend && (
        <p className="mt-2 text-sm text-gray-500">
          <span className={`font-semibold ${trend.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value >= 0 ? '+' : ''}
            {trend.value}%
          </span>{' '}
          {trend.label}
        </p>
      )}
    </motion.div>
  )
}

// ✅ ProgressCard
export function ProgressCard({ title, current, target, unit, color, delay = 0 }: ProgressCardProps) {
  const progress = Math.min((current / target) * 100, 100)
  const colorClasses: Record<'blue' | 'red' | 'green' | 'purple', string> = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-white rounded-lg shadow-sm p-5"
    >
      <h3 className="text-sm text-gray-600 mb-2">{title}</h3>
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>{current}{unit}</span>
        <span>{target}{unit}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`h-2 ${colorClasses[color]} rounded-full`} style={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  )
}

// ✅ ActivityItem
export function ActivityItem({ icon, type, date, notes }: ActivityItemProps) {
  return (
    <div className="flex items-start space-x-3 border-b border-gray-100 pb-3">
      <div className="text-blue-500">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-800">{type}</p>
        <p className="text-xs text-gray-500">{date}</p>
        {notes && <p className="text-xs text-gray-400 italic">{notes}</p>}
      </div>
    </div>
  )
}
