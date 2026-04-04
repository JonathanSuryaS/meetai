import { Suspense } from "react"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

import { getQueryClient, trpc } from "@/trpc/server"

import {
    AgentsView,
    AgentsViewLoding,
    AgentsViewError
} from "@/modules/agents/ui/views/agents-view"

import { ErrorBoundary } from "react-error-boundary"

const Page = () => {
    const queryClient = getQueryClient()
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions())

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<AgentsViewLoding />}>
                <ErrorBoundary fallback={<AgentsViewError/>}>
                    <AgentsView />
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary >
    )
}

export default Page