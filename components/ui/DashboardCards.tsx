'use client'

import { motion } from 'framer-motion'
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MinusIcon,
  CalendarDaysIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

// --- PASTE ALL OF YOUR PROVIDED COMPONENT CODE HERE ---
// (StatCard, ProgressCard, ActivityItem, and EmptyState)

// For example, starting with the StatCard:
interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ReactNode
  color: 'blue' | 'red' | 'green' | 'purple' | 'yellow' | 'indigo'
  trend?: { value: number; label: string }
  delay?: number
}
