import {DURATIONS} from 'src/timeMachine/constants/queryBuilder'

import {
  Check,
  DashboardQuery,
  ThresholdCheck,
  TagRuleDraft,
  DeadmanCheck,
} from 'src/types'
import {NotificationEndpoint, CheckStatusLevel} from 'src/client'
import {ComponentColor, InfluxColors} from '@influxdata/clockface'
import {DurationOption} from 'src/shared/components/DurationSelector'

export const DEFAULT_CHECK_NAME = 'Name this Check'
export const DEFAULT_NOTIFICATION_RULE_NAME = 'Name this Notification Rule'

export const CHECK_NAME_MAX_LENGTH = 68
export const DEFAULT_CHECK_EVERY = '1m'
export const DEFAULT_CHECK_OFFSET = '0s'
export const DEFAULT_CHECK_REPORT_ZERO = false
export const DEFAULT_DEADMAN_LEVEL: CheckStatusLevel = 'CRIT'
export const DEFAULT_STATUS_MESSAGE =
  'Check: ${ r._check_name } is: ${ r._level }'

export const CHECK_EVERY_OPTIONS: DurationOption[] = DURATIONS

export const CHECK_OFFSET_OPTIONS: DurationOption[] = [
  {duration: '0s', displayText: 'None'},
  {duration: '5s', displayText: '5 seconds'},
  {duration: '15s', displayText: '15 seconds'},
  {duration: '1m', displayText: '1 minute'},
  {duration: '5m', displayText: '5 minutes'},
  {duration: '15m', displayText: '15 minutes'},
  {duration: '1h', displayText: '1 hour'},
  {duration: '6h', displayText: '6 hours'},
  {duration: '12h', displayText: '12 hours'},
  {duration: '24h', displayText: '24 hours'},
  {duration: '2d', displayText: '2 days'},
  {duration: '7d', displayText: '7 days'},
  {duration: '30d', displayText: '30 days'},
]

export const MONITORING_BUCKET = '_monitoring'

export const LEVEL_COLORS = {
  OK: InfluxColors.Viridian,
  INFO: InfluxColors.Ocean,
  WARN: InfluxColors.Thunder,
  CRIT: InfluxColors.Fire,
  UNKNOWN: InfluxColors.Amethyst,
}

export const LEVEL_COMPONENT_COLORS = {
  OK: ComponentColor.Success,
  INFO: ComponentColor.Primary,
  WARN: ComponentColor.Warning,
  CRIT: ComponentColor.Danger,
}

export const DEFAULT_THRESHOLD_CHECK: Partial<ThresholdCheck> = {
  name: DEFAULT_CHECK_NAME,
  type: 'threshold',
  status: 'active',
  thresholds: [],
  every: DEFAULT_CHECK_EVERY,
  offset: DEFAULT_CHECK_OFFSET,
  statusMessageTemplate: DEFAULT_STATUS_MESSAGE,
}

export const DEFAULT_DEADMAN_CHECK: Partial<DeadmanCheck> = {
  name: DEFAULT_CHECK_NAME,
  type: 'deadman',
  status: 'active',
  every: DEFAULT_CHECK_EVERY,
  offset: DEFAULT_CHECK_OFFSET,
  reportZero: DEFAULT_CHECK_REPORT_ZERO,
  level: DEFAULT_DEADMAN_LEVEL,
  statusMessageTemplate: DEFAULT_STATUS_MESSAGE,
  timeSince: '90s',
  staleTime: '10m',
}

export const CHECK_QUERY_FIXTURE: DashboardQuery = {
  text: 'this is query',
  editMode: 'advanced',
  builderConfig: null,
  name: 'great q',
}

export const CHECK_FIXTURE_1: Check = {
  id: '1',
  type: 'threshold',
  name: 'Amoozing check',
  orgID: 'lala',
  createdAt: '2019-12-17T00:00',
  updatedAt: '2019-05-17T00:00',
  query: CHECK_QUERY_FIXTURE,
  status: 'active',
  every: '2d',
  offset: '1m',
  tags: [{key: 'a', value: 'b'}],
  statusMessageTemplate: 'this is a great message template',
  thresholds: [
    {
      level: 'CRIT',
      type: 'lesser',
      value: 10,
    },
  ],
}

export const CHECK_FIXTURE_2: Check = {
  id: '2',
  type: 'threshold',
  name: 'Another check',
  orgID: 'lala',
  createdAt: '2019-12-17T00:00',
  updatedAt: '2019-05-17T00:00',
  query: CHECK_QUERY_FIXTURE,
  status: 'active',
  every: '2d',
  offset: '1m',
  tags: [{key: 'a', value: 'b'}],
  statusMessageTemplate: 'this is a great message template',
  thresholds: [
    {
      level: 'INFO',
      type: 'greater',
      value: 10,
    },
  ],
}

export const CHECK_FIXTURES: Array<Check> = [CHECK_FIXTURE_1, CHECK_FIXTURE_2]

export const NEW_TAG_RULE_DRAFT: TagRuleDraft = {
  cid: '',
  value: {
    key: '',
    value: '',
    operator: 'equal',
  },
}

export const DEFAULT_ENDPOINT_URLS = {
  slack: 'https://hooks.slack.com/services/X/X/X',
  pagerduty: 'https://events.pagerduty.com/v2/enqueue',
  http: 'https://www.example.com/endpoint',
}

export const NEW_ENDPOINT_DRAFT: NotificationEndpoint = {
  name: 'Name this Endpoint',
  description: '',
  status: 'active',
  type: 'slack',
  token: '',
  url: DEFAULT_ENDPOINT_URLS['slack'],
}

export const NEW_ENDPOINT_FIXTURES: NotificationEndpoint[] = [
  {
    id: '1',
    orgID: '1',
    userID: '1',
    description: 'interrupt everyone at work',
    name: 'Slack',
    status: 'active',
    type: 'slack',
    url: 'insert.slack.url.here',
    token: 'plerps',
  },
  {
    id: '3',
    orgID: '1',
    userID: '1',
    description: 'interrupt someone by all means known to man',
    name: 'PagerDuty',
    status: 'active',
    type: 'pagerduty',
    clientURL: 'insert.pagerduty.client.url.here',
    routingKey: 'plerps',
  },
]
