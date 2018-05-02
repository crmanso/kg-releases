import { apiService } from '@/srv/api.service'
import { mdService } from '@/srv/md.service'

export interface FeedResp {
  rateLimit: any
  lastStarred: string[]
  starredRepos: number
  releases: Release[]
}

export interface Release {
  // `${repoOwner}_${repoName}_${v}`
  id: string
  repoFullName: string
  created: number
  published: number
  v: string // semver
  descr: string // markdown
  githubId: number
  avatarUrl: string
}

class ReleasesService {
  async fetchReleases (): Promise<FeedResp> {
    const r = await apiService.get<FeedResp>('')
    r.releases = r.releases.map(r => this.mapRelease(r)) // .slice(0, 5)
    return r
  }

  private mapRelease (r: Release): Release {
    return {
      ...r,
      descr: mdService.parse((r.descr || '')), // .substr(0, 2000)),
    }
  }
}

export const releasesService = new ReleasesService()
