import type { Realtime } from "@inngest/realtime";
import { useInngestSubscription } from "@inngest/realtime/hooks";
import { useEffect, useState } from "react";
import type { NodeStatus } from "@/components/react-flow/node-status-indicator";

interface UseNodeStatusOptions {
    nodeId: string;
    channel: string;
    topic: string;
    refreshToken: () => Promise<Realtime.Subscribe.Token>;
};

export function useNodeStatus({
    nodeId,
    channel,
    topic,
    refreshToken,
}: UseNodeStatusOptions) {
    const [status, setStatus] = useState<NodeStatus>("initial");

    const { data } = 
};