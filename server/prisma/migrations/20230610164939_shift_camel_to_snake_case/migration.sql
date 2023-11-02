SET search_path TO adaptive_access_control;

-- CreateEnum
CREATE TYPE "asset_type" AS ENUM ('API', 'datapoint');

-- CreateEnum
CREATE TYPE "rule_type" AS ENUM ('predicate', 'derivative');

-- CreateEnum
CREATE TYPE "ruleset_type" AS ENUM ('risk_score', 'risk_threshold', 'risk_decisioning');

-- CreateTable
CREATE TABLE "asset" (
    "asset_id" BIGSERIAL NOT NULL,
    "organization_id" BIGINT NOT NULL,
    "name" CHAR[],
    "description" CHAR[],
    "asset_type" "asset_type" NOT NULL,
    "create_date" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "last_updated" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "asset_pkey" PRIMARY KEY ("asset_id")
);

-- CreateTable
CREATE TABLE "node" (
    "node_id" BIGSERIAL NOT NULL,
    "ruleset_id" BIGINT NOT NULL,
    "rule_id" BIGINT NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "node_pkey" PRIMARY KEY ("node_id")
);

-- CreateTable
CREATE TABLE "organization" (
    "organization_id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("organization_id")
);

-- CreateTable
CREATE TABLE "rule" (
    "rule_id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "string_representation" TEXT NOT NULL,
    "type" "rule_type" NOT NULL,
    "organization_id" BIGINT NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rule_pkey" PRIMARY KEY ("rule_id")
);

-- CreateTable
CREATE TABLE "ruleset" (
    "ruleset_id" BIGSERIAL NOT NULL,
    "organizationId" BIGINT NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ruleset_pkey" PRIMARY KEY ("ruleset_id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" BIGSERIAL NOT NULL,
    "organization_id" BIGINT NOT NULL,
    "username" CHAR[],
    "name" CHAR[],
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "access_flow" (
    "access_flow_id" BIGSERIAL NOT NULL,
    "asset_id" BIGINT NOT NULL,
    "principal_type_id" BIGINT NOT NULL,
    "name" CHAR[],
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accessFlow_pkey" PRIMARY KEY ("access_flow_id")
);

-- CreateTable
CREATE TABLE "access_flow_ruleset" (
    "access_flow_ruleset_id" BIGSERIAL NOT NULL,
    "access_flow_id" BIGINT NOT NULL,
    "ruleset_id" BIGINT NOT NULL,
    "ruleset_type" "ruleset_type" NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accessFlowRuleset_pkey" PRIMARY KEY ("access_flow_ruleset_id")
);

-- CreateTable
CREATE TABLE "adjacency_list" (
    "adjacency_list_id" BIGSERIAL NOT NULL,
    "node_id" BIGINT NOT NULL,
    "child_id" BIGINT NOT NULL,
    "arg_name" TEXT,
    "traversal_logic" TEXT,
    "create_date" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adjacencyList_pkey" PRIMARY KEY ("adjacency_list_id")
);

-- CreateTable
CREATE TABLE "principal_type" (
    "principal_type_id" BIGSERIAL NOT NULL,
    "organization_id" BIGINT NOT NULL,
    "name" CHAR[],
    "metadata" JSON,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "principalType_pkey" PRIMARY KEY ("principal_type_id")
);

-- AddForeignKey
ALTER TABLE "asset" ADD CONSTRAINT "asset_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("organization_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "node" ADD CONSTRAINT "node_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "rule"("rule_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "node" ADD CONSTRAINT "node_ruleset_id_fkey" FOREIGN KEY ("ruleset_id") REFERENCES "ruleset"("ruleset_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rule" ADD CONSTRAINT "rule_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("organization_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ruleset" ADD CONSTRAINT "ruleset_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("organization_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_organization_fk" FOREIGN KEY ("organization_id") REFERENCES "organization"("organization_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "access_flow" ADD CONSTRAINT "accessFlow_assetId_fkey" FOREIGN KEY ("asset_id") REFERENCES "asset"("asset_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "access_flow" ADD CONSTRAINT "accessFlow_principalTypeId_fkey" FOREIGN KEY ("principal_type_id") REFERENCES "principal_type"("principal_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "access_flow_ruleset" ADD CONSTRAINT "accessFlowRuleset_accessFlowId_fkey" FOREIGN KEY ("access_flow_id") REFERENCES "access_flow"("access_flow_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "access_flow_ruleset" ADD CONSTRAINT "accessFlowRuleset_rulesetId_fkey" FOREIGN KEY ("ruleset_id") REFERENCES "ruleset"("ruleset_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adjacency_list" ADD CONSTRAINT "adjacencyList_childId_fkey" FOREIGN KEY ("child_id") REFERENCES "node"("node_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adjacency_list" ADD CONSTRAINT "adjacencyList_nodeId_fkey" FOREIGN KEY ("node_id") REFERENCES "node"("node_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "principal_type" ADD CONSTRAINT "principalType_organizationId_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("organization_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
