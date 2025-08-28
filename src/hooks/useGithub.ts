"use client"

import { getRepo, checkStar, starRepo, unstarRepo, GithubRepo } from "@/lib/github"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { toast } from "sonner"

export function useGithub(repo?: string) {
  const { data: session } = useSession()
  const token = session?.accessToken
  const queryClient = useQueryClient()

  const repoQuery = useQuery<GithubRepo>({
    queryKey: ["repo", repo],
    queryFn: async () => {
      if (!repo) throw Error("Repository not set")

      try {
        const repoData = await getRepo(repo, token)
        const starred = await checkStar(repo, token)

        return { ...repoData, starred }
      } catch (err: any) {
        toast.error(err.message, { description: err.description })
        throw err
      }
    },
    staleTime: 1000 * 60 * 10,
  })

  const starMutation = useMutation({
    mutationFn: async () => {
      if (!repo) throw Error("Repository not set")

      try {
        if (!token) throw { message: "No token", description: "Log in with GitHub first" }
        await starRepo(repo, token)
        toast.success("Repository succefully starred")
      } catch (err: any) {
        toast.error(err.message, { description: err.description })
        throw err
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["repo", repo] }),
  })

  const unstarMutation = useMutation({
    mutationFn: async () => {
      if (!repo) throw Error("Repository not set")

      try {
        if (!token) throw { message: "No token", description: "Log in with GitHub first" }
        await unstarRepo(repo, token)
        toast.success("Repository succefully unstarred")
      } catch (err: any) {
        toast.error(err.message, { description: err.description })
        throw err
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["repo", repo] })
    },
  })

  const toggleStar = () => {
    if (repoQuery.data?.starred) unstarMutation.mutate()
    else starMutation.mutate()
  }

  return {
    repoQuery,
    toggleStar,
    token,
    session,
  }
}
