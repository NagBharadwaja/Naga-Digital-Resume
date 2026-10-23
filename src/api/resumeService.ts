import type { Resume } from '../data/types'

export async function fetchResumeData(signal?: AbortSignal): Promise<Resume> {
	const response = await fetch('/api/resume', { signal })

	if (!response.ok) {
		throw new Error(`Failed to load resume data (${response.status})`)
	}

	return response.json() as Promise<Resume>
}
