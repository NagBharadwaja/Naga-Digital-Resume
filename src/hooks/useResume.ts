import { useEffect, useState } from 'react'
import type { Resume } from './../data/types'
import { fetchResumeData } from '../api/resumeService';

export function useResume () {
    const [resume, setResume] = useState<Resume | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController()
    
        fetchResumeData(controller.signal)
          .then(setResume)
          .catch((loadError: unknown) => {
            if (controller.signal.aborted) return
    
            setError(loadError instanceof Error ? loadError.message : 'Unable to load resume data.')
          })
    
        return () => controller.abort()
      }, []);

      return {
        resume,
        error
      }
}