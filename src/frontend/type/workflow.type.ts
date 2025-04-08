export type Workflow = {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  active: boolean;
  nodes: Node[];
  connections: Connections;
  settings: {
    executionOrder: string;
  };
  staticData: null | Record<string, unknown>;
  meta: {
    templateCredsSetupCompleted: boolean;
  };
  pinData: Record<string, unknown>;
  versionId: string;
  triggerCount: number;
  tags: string[];
};

export type Node = {
  parameters: Record<string, unknown>;
  type: string;
  typeVersion: number;
  position: [number, number];
  id: string;
  name: string;
  webhookId?: string;
};

export type Connections = {
  [key: string]: {
    main: {
      node: string;
      type: string;
      index: number;
    }[][];
  };
};
