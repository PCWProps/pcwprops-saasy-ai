const analyzeIntent = (controlRequest, authContext, capabilities) => {
  const capabilityIds = capabilities.map((capability) => capability.capabilityId);
  return {
    requestId: controlRequest.requestId,
    recommendation: {
      routeType: "execute",
      target: {
        plane: "ExecutionPlane",
        system: "saasy-tech",
        handler: "mock-execution",
      },
      requiredCapabilities: capabilityIds,
      policyRef: "policy-local-allow",
    },
    reason: "stubbed-intent-analysis",
    issuedAt: new Date().toISOString(),
    authSummary: {
      subjectId: authContext.subjectId,
      tenantId: authContext.tenantId,
    },
  };
};

module.exports = {
  analyzeIntent,
};
