import React from 'react'
import { ComponentStory, Meta, StoryFn } from '@storybook/react'

import { DrawnCard } from './drawn-card'

export default {
  title: 'DrawnCard',
  component: DrawnCard,
} as Meta<typeof DrawnCard>

export const Fixture = () => <DrawnCard>kekw</DrawnCard>
