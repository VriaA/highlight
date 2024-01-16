import {
	IconSolidClickUp,
	IconSolidGithub,
	IconSolidGitlab,
	IconSolidHeight,
	IconSolidJira,
	IconSolidLinear,
} from '@highlight-run/ui/components'
import { VercelSettingsModalWidth } from '@pages/IntegrationAuthCallback/IntegrationAuthCallbackPage'
import ClearbitIntegrationConfig from '@pages/IntegrationsPage/components/ClearbitIntegration/ClearbitIntegrationConfig'
import ClickUpIntegrationConfig from '@pages/IntegrationsPage/components/ClickUpIntegration/ClickUpIntegrationConfig'
import ClickUpListSelector from '@pages/IntegrationsPage/components/ClickUpIntegration/ClickUpListSelector'
import DiscordIntegrationConfig from '@pages/IntegrationsPage/components/DiscordIntegration/DiscordIntegrationConfig'
import FrontIntegrationConfig from '@pages/IntegrationsPage/components/FrontIntegration/FrontIntegrationConfig'
import FrontPluginConfig from '@pages/IntegrationsPage/components/FrontPlugin/FrontPluginConfig'
import HeightIntegrationConfig from '@pages/IntegrationsPage/components/HeightIntegration/HeightIntegrationConfig'
import HeightListSelector from '@pages/IntegrationsPage/components/HeightIntegration/HeightListSelector'
import { IntegrationConfigProps } from '@pages/IntegrationsPage/components/Integration'
import LinearIntegrationConfig from '@pages/IntegrationsPage/components/LinearIntegration/LinearIntegrationConfig'
import LinearTeamSelector from '@pages/IntegrationsPage/components/LinearIntegration/LinearTeamSelector'
import SlackIntegrationConfig from '@pages/IntegrationsPage/components/SlackIntegration/SlackIntegrationConfig'
import VercelIntegrationConfig from '@pages/IntegrationsPage/components/VercelIntegration/VercelIntegrationConfig'
import ZapierIntegrationConfig from '@pages/IntegrationsPage/components/ZapierIntegration/ZapierIntegrationConfig'
import { IssueTrackerIntegration } from '@pages/IntegrationsPage/IssueTrackerIntegrations'
import React from 'react'

import GitlabIntegrationConfig from '@/pages/IntegrationsPage/components/GitlabIntegration/GitlabIntegrationConfig'
import GitlabProjectSelector from '@/pages/IntegrationsPage/components/GitlabIntegration/GitlabProjectSelector'
import JiraIntegrationConfig from '@/pages/IntegrationsPage/components/JiraIntegration/JiraIntegrationConfig'
import JiraProjectAndIssueTypeSelector from '@/pages/IntegrationsPage/components/JiraIntegration/JiraProjectSelector'
import ClearbitLogo from '@/static/integrations/clearbit.svg'
import ClickupLogo from '@/static/integrations/clickup.svg'
import DiscordLogo from '@/static/integrations/discord.svg'
import FrontLogo from '@/static/integrations/front.png'
import GitHubLogo from '@/static/integrations/github.svg'
import GitlabLogo from '@/static/integrations/gitlab.png'
import HeightLogo from '@/static/integrations/height.svg'
import JiraLogo from '@/static/integrations/jira.png'
import LinearLogo from '@/static/integrations/linear.png'
import SlackLogo from '@/static/integrations/slack.png'
import VercelLogo from '@/static/integrations/vercel-icon-dark.svg'
import ZapierLogo from '@/static/integrations/zapier.png'

import GitHubIntegrationConfig from './components/GitHubIntegration/GitHubIntegrationConfig'
import GitHubRepoSelector from './components/GitHubIntegration/GitHubRepoSelector'

export interface Integration {
	key: string
	name: string
	externalLink?: string
	configurationPath: string
	description: string
	defaultEnable?: boolean
	icon: string
	noRoundedIcon?: boolean
	onlyShowForHighlightAdmin?: boolean
	allowlistWorkspaceIds?: Array<string>

	/**
	 * The page to configure the integration. This can be rendered in a modal or on a different page.
	 */
	configurationPage: (opts: IntegrationConfigProps) => React.ReactNode
	hasSettings: boolean
	modalWidth?: number
	docs?: string
}

export const SLACK_INTEGRATION: Integration = {
	key: 'slack',
	name: 'Slack',
	configurationPath: 'slack',
	description:
		'Bring your Highlight comments and alerts to slack as messages.',
	icon: SlackLogo,
	configurationPage: (opts) => <SlackIntegrationConfig {...opts} />,
	hasSettings: false,
}

export const LINEAR_INTEGRATION: IssueTrackerIntegration = {
	key: 'linear',
	name: 'Linear',
	configurationPath: 'linear',
	description: 'Bring your Highlight comments to Linear as issues.',
	icon: LinearLogo,
	configurationPage: (opts) => <LinearIntegrationConfig {...opts} />,
	hasSettings: false,
	containerLabel: 'team',
	issueLabel: 'issue',
	containerSelection: (opts) => <LinearTeamSelector {...opts} />,
	Icon: IconSolidLinear,
}

export const JIRA_INTEGRATION: IssueTrackerIntegration = {
	key: 'jira',
	name: 'Jira',
	configurationPath: 'jira',
	description: 'Bring your Highlight comments to Jira as issues.',
	icon: JiraLogo,
	configurationPage: (opts) => <JiraIntegrationConfig {...opts} />,
	hasSettings: false,
	containerLabel: 'team',
	issueLabel: 'issue',
	containerSelection: (opts) => <JiraProjectAndIssueTypeSelector {...opts} />,
	Icon: IconSolidJira,
}

export const GITLAB_INTEGRATION: IssueTrackerIntegration = {
	key: 'gitlab',
	name: 'GitLab',
	configurationPath: 'gitlab',
	description: 'Bring your Highlight comments to GitLab as issues.',
	icon: GitlabLogo,
	configurationPage: (opts) => <GitlabIntegrationConfig {...opts} />,
	hasSettings: false,
	containerLabel: 'team',
	issueLabel: 'issue',
	containerSelection: (opts) => <GitlabProjectSelector {...opts} />,
	Icon: IconSolidGitlab,
}

export const ZAPIER_INTEGRATION: Integration = {
	key: 'zapier',
	name: 'Zapier',
	configurationPath: 'zapier',
	onlyShowForHighlightAdmin: true,
	description: 'Use Highlight alerts to trigger a Zap.',
	icon: ZapierLogo,
	configurationPage: (opts) => <ZapierIntegrationConfig {...opts} />,
	hasSettings: false,
}

export const CLEARBIT_INTEGRATION: Integration = {
	key: 'clearbit',
	name: 'Clearbit',
	configurationPath: 'clearbit',
	description: 'Collect enhanced user analytics.',
	icon: ClearbitLogo,
	configurationPage: (opts) => <ClearbitIntegrationConfig {...opts} />,
	hasSettings: false,
}

export const FRONT_INTEGRATION: Integration = {
	key: 'front',
	name: 'Front',
	configurationPath: 'front',
	onlyShowForHighlightAdmin: true,
	description: 'Enhance your customer interaction experience.',
	icon: FrontLogo,
	configurationPage: (opts) => <FrontIntegrationConfig {...opts} />,
	hasSettings: false,
}

export const FRONT_PLUGIN: Integration = {
	key: 'front',
	name: 'Front',
	configurationPath: 'front',
	description: 'Enhance your customer interaction experience.',
	icon: FrontLogo,
	configurationPage: (opts) => <FrontPluginConfig {...opts} />,
	hasSettings: false,
}

export const VERCEL_INTEGRATION: Integration = {
	key: 'vercel',
	name: 'Vercel',
	configurationPath: 'vercel',
	description: 'Configuration for your Vercel projects.',
	configurationPage: (opts) => <VercelIntegrationConfig {...opts} />,
	icon: VercelLogo,
	noRoundedIcon: true,
	hasSettings: true,
	modalWidth: VercelSettingsModalWidth,
}

export const DISCORD_INTEGRATION: Integration = {
	key: 'discord',
	name: 'Discord',
	configurationPath: 'discord',
	description: 'Bring your Highlight alerts to discord as messages.',
	icon: DiscordLogo,
	configurationPage: (opts) => <DiscordIntegrationConfig {...opts} />,
	hasSettings: false,
}

export const CLICKUP_INTEGRATION: IssueTrackerIntegration = {
	key: 'clickup',
	name: 'ClickUp',
	configurationPath: 'clickup',
	description: 'Create ClickUp tasks from your Highlight comments.',
	configurationPage: (opts) => <ClickUpIntegrationConfig {...opts} />,
	icon: ClickupLogo,
	hasSettings: true,
	modalWidth: 672,
	containerLabel: 'list',
	issueLabel: 'task',
	containerSelection: (opts) => <ClickUpListSelector {...opts} />,
	Icon: IconSolidClickUp,
}

export const HEIGHT_INTEGRATION: IssueTrackerIntegration = {
	key: 'height',
	name: 'Height',
	configurationPath: 'height',
	description: 'Create Height tasks from your Highlight comments.',
	configurationPage: (opts) => <HeightIntegrationConfig {...opts} />,
	icon: HeightLogo,
	hasSettings: true,
	modalWidth: 672,
	containerLabel: 'list',
	issueLabel: 'task',
	containerSelection: (opts) => <HeightListSelector {...opts} />,
	Icon: IconSolidHeight,
}

export const GITHUB_INTEGRATION: IssueTrackerIntegration = {
	key: 'github',
	name: 'GitHub',
	configurationPath: 'github',
	description:
		'Create GitHub issues from comments and enhance your stacktraces.',
	configurationPage: (opts) => <GitHubIntegrationConfig {...opts} />,
	icon: GitHubLogo,
	hasSettings: false,
	containerLabel: 'repo',
	issueLabel: 'issue',
	containerSelection: (opts) => <GitHubRepoSelector {...opts} />,
	Icon: IconSolidGithub,
}

const INTEGRATIONS: Integration[] = [
	SLACK_INTEGRATION,
	LINEAR_INTEGRATION,
	ZAPIER_INTEGRATION,
	CLEARBIT_INTEGRATION,
	FRONT_PLUGIN,
	VERCEL_INTEGRATION,
	DISCORD_INTEGRATION,
	CLICKUP_INTEGRATION,
	HEIGHT_INTEGRATION,
	GITHUB_INTEGRATION,
	JIRA_INTEGRATION,
	GITLAB_INTEGRATION,
]

export default INTEGRATIONS
