import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, isObject } from "../../../helpers";
export interface QueryConfigRequest {}
export interface QueryConfigRequestProtoMsg {
  typeUrl: "/pryzmatics.server.common.QueryConfigRequest";
  value: Uint8Array;
}
export interface QueryConfigRequestAmino {}
export interface QueryConfigRequestAminoMsg {
  type: "/pryzmatics.server.common.QueryConfigRequest";
  value: QueryConfigRequestAmino;
}
export interface QueryConfigRequestSDKType {}
export interface QueryConfigResponse {
  config: Config;
  gitRevision: string;
  uptime: string;
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: "/pryzmatics.server.common.QueryConfigResponse";
  value: Uint8Array;
}
export interface QueryConfigResponseAmino {
  config?: ConfigAmino;
  git_revision?: string;
  uptime?: string;
}
export interface QueryConfigResponseAminoMsg {
  type: "/pryzmatics.server.common.QueryConfigResponse";
  value: QueryConfigResponseAmino;
}
export interface QueryConfigResponseSDKType {
  config: ConfigSDKType;
  git_revision: string;
  uptime: string;
}
export interface Config_RpcEndpointsEntry {
  key: string;
  value: string;
}
export interface Config_RpcEndpointsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Config_RpcEndpointsEntryAmino {
  key?: string;
  value?: string;
}
export interface Config_RpcEndpointsEntryAminoMsg {
  type: string;
  value: Config_RpcEndpointsEntryAmino;
}
export interface Config_RpcEndpointsEntrySDKType {
  key: string;
  value: string;
}
export interface Config_AssetsEntry {
  key: string;
  value?: AssetConfig;
}
export interface Config_AssetsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Config_AssetsEntryAmino {
  key?: string;
  value?: AssetConfigAmino;
}
export interface Config_AssetsEntryAminoMsg {
  type: string;
  value: Config_AssetsEntryAmino;
}
export interface Config_AssetsEntrySDKType {
  key: string;
  value?: AssetConfigSDKType;
}
export interface Config {
  productionMode: boolean;
  stableCoins: StableCoinConfig[];
  favoritePairsMaxCount: number;
  metricCalculationIntervalBlocks: number;
  enableFakePriceGenerator: boolean;
  rpcEndpoints: {
    [key: string]: string;
  };
  databaseConfig: DatabaseConfig;
  chainConfig: ChainConfig;
  loggerConfig: LoggerConfig;
  indexerConfig: IndexerConfig;
  profilerConfig: ProfilerConfig;
  yieldReturnConfig: YieldReturnConfig;
  faucetConfig: FaucetConfig;
  assets: {
    [key: string]: AssetConfig;
  };
  /** @deprecated */
  pvaultFactoryContractAddress: string;
  supportedDenomsForExternalPrice: string[];
  contracts: Contracts;
  incentives: Incentives;
}
export interface ConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.Config";
  value: Uint8Array;
}
export interface ConfigAmino {
  production_mode?: boolean;
  stable_coins?: StableCoinConfigAmino[];
  favorite_pairs_max_count?: number;
  metric_calculation_interval_blocks?: number;
  enableFakePriceGenerator?: boolean;
  rpc_endpoints?: {
    [key: string]: string;
  };
  database_config?: DatabaseConfigAmino;
  chain_config?: ChainConfigAmino;
  logger_config?: LoggerConfigAmino;
  indexer_config?: IndexerConfigAmino;
  profiler_config?: ProfilerConfigAmino;
  yield_return_config?: YieldReturnConfigAmino;
  faucet_config?: FaucetConfigAmino;
  assets?: {
    [key: string]: AssetConfigAmino;
  };
  /** @deprecated */
  pvault_factory_contract_address?: string;
  supported_denoms_for_external_price?: string[];
  contracts?: ContractsAmino;
  incentives?: IncentivesAmino;
}
export interface ConfigAminoMsg {
  type: "/pryzmatics.server.common.Config";
  value: ConfigAmino;
}
export interface ConfigSDKType {
  production_mode: boolean;
  stable_coins: StableCoinConfigSDKType[];
  favorite_pairs_max_count: number;
  metric_calculation_interval_blocks: number;
  enableFakePriceGenerator: boolean;
  rpc_endpoints: {
    [key: string]: string;
  };
  database_config: DatabaseConfigSDKType;
  chain_config: ChainConfigSDKType;
  logger_config: LoggerConfigSDKType;
  indexer_config: IndexerConfigSDKType;
  profiler_config: ProfilerConfigSDKType;
  yield_return_config: YieldReturnConfigSDKType;
  faucet_config: FaucetConfigSDKType;
  assets: {
    [key: string]: AssetConfigSDKType;
  };
  /** @deprecated */
  pvault_factory_contract_address: string;
  supported_denoms_for_external_price: string[];
  contracts: ContractsSDKType;
  incentives: IncentivesSDKType;
}
export interface Contracts {
  pryzmNexus: string;
  yLaunchFactory: string;
  pVaultFactory: string;
  orderBook: string;
  pryzmPhotonDropClaim1: string;
  pryzmPhotonDropClaim2: string;
  pryzmStakeDropClaim: string;
}
export interface ContractsProtoMsg {
  typeUrl: "/pryzmatics.server.common.Contracts";
  value: Uint8Array;
}
export interface ContractsAmino {
  pryzm_nexus?: string;
  y_launch_factory?: string;
  p_vault_factory?: string;
  order_book?: string;
  pryzm_photon_drop_claim1?: string;
  pryzm_photon_drop_claim2?: string;
  pryzm_stake_drop_claim?: string;
}
export interface ContractsAminoMsg {
  type: "/pryzmatics.server.common.Contracts";
  value: ContractsAmino;
}
export interface ContractsSDKType {
  pryzm_nexus: string;
  y_launch_factory: string;
  p_vault_factory: string;
  order_book: string;
  pryzm_photon_drop_claim1: string;
  pryzm_photon_drop_claim2: string;
  pryzm_stake_drop_claim: string;
}
export interface Incentives {
  pools: IncentivesPool[];
}
export interface IncentivesProtoMsg {
  typeUrl: "/pryzmatics.server.common.Incentives";
  value: Uint8Array;
}
export interface IncentivesAmino {
  pools?: IncentivesPoolAmino[];
}
export interface IncentivesAminoMsg {
  type: "/pryzmatics.server.common.Incentives";
  value: IncentivesAmino;
}
export interface IncentivesSDKType {
  pools: IncentivesPoolSDKType[];
}
export interface IncentivesPool {
  apr: number;
  bondedToken: string;
  rewardToken: string;
}
export interface IncentivesPoolProtoMsg {
  typeUrl: "/pryzmatics.server.common.IncentivesPool";
  value: Uint8Array;
}
export interface IncentivesPoolAmino {
  apr?: number;
  bonded_token?: string;
  reward_token?: string;
}
export interface IncentivesPoolAminoMsg {
  type: "/pryzmatics.server.common.IncentivesPool";
  value: IncentivesPoolAmino;
}
export interface IncentivesPoolSDKType {
  apr: number;
  bonded_token: string;
  reward_token: string;
}
export interface DatabaseConfig {
  poolMinConns: number;
  poolMaxConns: number;
  queryLoggerEnabled: boolean;
  migrationDisabled: boolean;
}
export interface DatabaseConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.DatabaseConfig";
  value: Uint8Array;
}
export interface DatabaseConfigAmino {
  pool_min_conns?: number;
  pool_max_conns?: number;
  query_logger_enabled?: boolean;
  migration_disabled?: boolean;
}
export interface DatabaseConfigAminoMsg {
  type: "/pryzmatics.server.common.DatabaseConfig";
  value: DatabaseConfigAmino;
}
export interface DatabaseConfigSDKType {
  pool_min_conns: number;
  pool_max_conns: number;
  query_logger_enabled: boolean;
  migration_disabled: boolean;
}
export interface ChainConfig {
  rpcUrl: string;
  grpcUrl: string;
  apiUrl: string;
  syncIntervalMillis: number;
}
export interface ChainConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.ChainConfig";
  value: Uint8Array;
}
export interface ChainConfigAmino {
  rpc_url?: string;
  grpc_url?: string;
  api_url?: string;
  sync_interval_millis?: number;
}
export interface ChainConfigAminoMsg {
  type: "/pryzmatics.server.common.ChainConfig";
  value: ChainConfigAmino;
}
export interface ChainConfigSDKType {
  rpc_url: string;
  grpc_url: string;
  api_url: string;
  sync_interval_millis: number;
}
export interface LoggerConfig {
  level: string;
  file: string;
  maxSize: number;
  maxBackups: number;
  maxAgeDays: number;
  compress: boolean;
  syslog: boolean;
  reportCaller: boolean;
}
export interface LoggerConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.LoggerConfig";
  value: Uint8Array;
}
export interface LoggerConfigAmino {
  level?: string;
  file?: string;
  max_size?: number;
  max_backups?: number;
  max_age_days?: number;
  compress?: boolean;
  syslog?: boolean;
  report_caller?: boolean;
}
export interface LoggerConfigAminoMsg {
  type: "/pryzmatics.server.common.LoggerConfig";
  value: LoggerConfigAmino;
}
export interface LoggerConfigSDKType {
  level: string;
  file: string;
  max_size: number;
  max_backups: number;
  max_age_days: number;
  compress: boolean;
  syslog: boolean;
  report_caller: boolean;
}
export interface IndexerConfig {
  disable: boolean;
  disableSyncForDebug: boolean;
  startBlock: bigint;
  pauseAtBlock: bigint;
  pruner: PrunerConfig;
  pauseAtUpgradePlanBlockHeight: bigint;
}
export interface IndexerConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.IndexerConfig";
  value: Uint8Array;
}
export interface IndexerConfigAmino {
  disable?: boolean;
  disable_sync_for_debug?: boolean;
  start_block?: string;
  pause_at_block?: string;
  pruner?: PrunerConfigAmino;
  pause_at_upgrade_plan_block_height?: string;
}
export interface IndexerConfigAminoMsg {
  type: "/pryzmatics.server.common.IndexerConfig";
  value: IndexerConfigAmino;
}
export interface IndexerConfigSDKType {
  disable: boolean;
  disable_sync_for_debug: boolean;
  start_block: bigint;
  pause_at_block: bigint;
  pruner: PrunerConfigSDKType;
  pause_at_upgrade_plan_block_height: bigint;
}
export interface PrunerConfig {
  pruneBlock: number;
  pruneIntervalBlocks: number;
  keepBlocks: number;
}
export interface PrunerConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.PrunerConfig";
  value: Uint8Array;
}
export interface PrunerConfigAmino {
  prune_block?: number;
  prune_interval_blocks?: number;
  keep_blocks?: number;
}
export interface PrunerConfigAminoMsg {
  type: "/pryzmatics.server.common.PrunerConfig";
  value: PrunerConfigAmino;
}
export interface PrunerConfigSDKType {
  prune_block: number;
  prune_interval_blocks: number;
  keep_blocks: number;
}
export interface ProfilerConfig {
  cpuEnabled: boolean;
  memoryEnabled: boolean;
  dir: string;
  stopAfterBlocks: number;
  stopAfterSeconds: number;
}
export interface ProfilerConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.ProfilerConfig";
  value: Uint8Array;
}
export interface ProfilerConfigAmino {
  cpu_enabled?: boolean;
  memory_enabled?: boolean;
  dir?: string;
  stop_after_blocks?: number;
  stop_after_seconds?: number;
}
export interface ProfilerConfigAminoMsg {
  type: "/pryzmatics.server.common.ProfilerConfig";
  value: ProfilerConfigAmino;
}
export interface ProfilerConfigSDKType {
  cpu_enabled: boolean;
  memory_enabled: boolean;
  dir: string;
  stop_after_blocks: number;
  stop_after_seconds: number;
}
export interface YieldReturnConfig {
  timeWindowDays: number;
  calculationIntervalBlocks: number;
}
export interface YieldReturnConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.YieldReturnConfig";
  value: Uint8Array;
}
export interface YieldReturnConfigAmino {
  time_window_days?: number;
  calculation_interval_blocks?: number;
}
export interface YieldReturnConfigAminoMsg {
  type: "/pryzmatics.server.common.YieldReturnConfig";
  value: YieldReturnConfigAmino;
}
export interface YieldReturnConfigSDKType {
  time_window_days: number;
  calculation_interval_blocks: number;
}
export interface FaucetConfig {
  chain: FaucetChainConfig;
  captcha: FaucetCaptchaConfig;
}
export interface FaucetConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.FaucetConfig";
  value: Uint8Array;
}
export interface FaucetConfigAmino {
  chain?: FaucetChainConfigAmino;
  captcha?: FaucetCaptchaConfigAmino;
}
export interface FaucetConfigAminoMsg {
  type: "/pryzmatics.server.common.FaucetConfig";
  value: FaucetConfigAmino;
}
export interface FaucetConfigSDKType {
  chain: FaucetChainConfigSDKType;
  captcha: FaucetCaptchaConfigSDKType;
}
export interface FaucetChainConfig {
  id: string;
  accPrefix: string;
  txFeeDenom: string;
  txFeeAmount: bigint;
  txGasLimit: bigint;
}
export interface FaucetChainConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.FaucetChainConfig";
  value: Uint8Array;
}
export interface FaucetChainConfigAmino {
  id?: string;
  acc_prefix?: string;
  tx_fee_denom?: string;
  tx_fee_amount?: string;
  tx_gas_limit?: string;
}
export interface FaucetChainConfigAminoMsg {
  type: "/pryzmatics.server.common.FaucetChainConfig";
  value: FaucetChainConfigAmino;
}
export interface FaucetChainConfigSDKType {
  id: string;
  acc_prefix: string;
  tx_fee_denom: string;
  tx_fee_amount: bigint;
  tx_gas_limit: bigint;
}
export interface FaucetCaptchaConfig {
  disable: boolean;
  v2Hostname: string[];
  v3Action: string[];
  v3Hostname: string[];
  v3Score: number;
  hHostname: string[];
  hScore: number;
}
export interface FaucetCaptchaConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.FaucetCaptchaConfig";
  value: Uint8Array;
}
export interface FaucetCaptchaConfigAmino {
  disable?: boolean;
  v2_hostname?: string[];
  v3_action?: string[];
  v3_hostname?: string[];
  v3_score?: number;
  h_hostname?: string[];
  h_score?: number;
}
export interface FaucetCaptchaConfigAminoMsg {
  type: "/pryzmatics.server.common.FaucetCaptchaConfig";
  value: FaucetCaptchaConfigAmino;
}
export interface FaucetCaptchaConfigSDKType {
  disable: boolean;
  v2_hostname: string[];
  v3_action: string[];
  v3_hostname: string[];
  v3_score: number;
  h_hostname: string[];
  h_score: number;
}
export interface StableCoinConfig {
  denom: string;
  decimals: number;
  displayName: string;
}
export interface StableCoinConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.StableCoinConfig";
  value: Uint8Array;
}
export interface StableCoinConfigAmino {
  denom?: string;
  decimals?: number;
  display_name?: string;
}
export interface StableCoinConfigAminoMsg {
  type: "/pryzmatics.server.common.StableCoinConfig";
  value: StableCoinConfigAmino;
}
export interface StableCoinConfigSDKType {
  denom: string;
  decimals: number;
  display_name: string;
}
export interface AssetConfig {
  underlyingTokenDenom: string;
  yieldMinDataCount: bigint;
  displayName: string;
  decimals: bigint;
}
export interface AssetConfigProtoMsg {
  typeUrl: "/pryzmatics.server.common.AssetConfig";
  value: Uint8Array;
}
export interface AssetConfigAmino {
  underlyingTokenDenom?: string;
  yieldMinDataCount?: string;
  displayName?: string;
  decimals?: string;
}
export interface AssetConfigAminoMsg {
  type: "/pryzmatics.server.common.AssetConfig";
  value: AssetConfigAmino;
}
export interface AssetConfigSDKType {
  underlyingTokenDenom: string;
  yieldMinDataCount: bigint;
  displayName: string;
  decimals: bigint;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  typeUrl: "/pryzmatics.server.common.QueryConfigRequest",
  is(o: any): o is QueryConfigRequest {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  isSDK(o: any): o is QueryConfigRequestSDKType {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  isAmino(o: any): o is QueryConfigRequestAmino {
    return o && o.$typeUrl === QueryConfigRequest.typeUrl;
  },
  encode(_: QueryConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  toAmino(_: QueryConfigRequest, useInterfaces: boolean = true): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg, useInterfaces: boolean = true): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConfigRequest.typeUrl, QueryConfigRequest);
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: Config.fromPartial({}),
    gitRevision: "",
    uptime: ""
  };
}
export const QueryConfigResponse = {
  typeUrl: "/pryzmatics.server.common.QueryConfigResponse",
  is(o: any): o is QueryConfigResponse {
    return o && (o.$typeUrl === QueryConfigResponse.typeUrl || Config.is(o.config) && typeof o.gitRevision === "string" && typeof o.uptime === "string");
  },
  isSDK(o: any): o is QueryConfigResponseSDKType {
    return o && (o.$typeUrl === QueryConfigResponse.typeUrl || Config.isSDK(o.config) && typeof o.git_revision === "string" && typeof o.uptime === "string");
  },
  isAmino(o: any): o is QueryConfigResponseAmino {
    return o && (o.$typeUrl === QueryConfigResponse.typeUrl || Config.isAmino(o.config) && typeof o.git_revision === "string" && typeof o.uptime === "string");
  },
  encode(message: QueryConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.gitRevision !== "") {
      writer.uint32(18).string(message.gitRevision);
    }
    if (message.uptime !== "") {
      writer.uint32(26).string(message.uptime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.gitRevision = reader.string();
          break;
        case 3:
          message.uptime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined,
      gitRevision: isSet(object.gitRevision) ? String(object.gitRevision) : "",
      uptime: isSet(object.uptime) ? String(object.uptime) : ""
    };
  },
  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    message.gitRevision !== undefined && (obj.gitRevision = message.gitRevision);
    message.uptime !== undefined && (obj.uptime = message.uptime);
    return obj;
  },
  fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    message.gitRevision = object.gitRevision ?? "";
    message.uptime = object.uptime ?? "";
    return message;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromAmino(object.config);
    }
    if (object.git_revision !== undefined && object.git_revision !== null) {
      message.gitRevision = object.git_revision;
    }
    if (object.uptime !== undefined && object.uptime !== null) {
      message.uptime = object.uptime;
    }
    return message;
  },
  toAmino(message: QueryConfigResponse, useInterfaces: boolean = true): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config, useInterfaces) : undefined;
    obj.git_revision = message.gitRevision === "" ? undefined : message.gitRevision;
    obj.uptime = message.uptime === "" ? undefined : message.uptime;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg, useInterfaces: boolean = true): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConfigResponse.typeUrl, QueryConfigResponse);
function createBaseConfig_RpcEndpointsEntry(): Config_RpcEndpointsEntry {
  return {
    key: "",
    value: ""
  };
}
export const Config_RpcEndpointsEntry = {
  encode(message: Config_RpcEndpointsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Config_RpcEndpointsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig_RpcEndpointsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Config_RpcEndpointsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Config_RpcEndpointsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<Config_RpcEndpointsEntry>): Config_RpcEndpointsEntry {
    const message = createBaseConfig_RpcEndpointsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Config_RpcEndpointsEntryAmino): Config_RpcEndpointsEntry {
    const message = createBaseConfig_RpcEndpointsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Config_RpcEndpointsEntry, useInterfaces: boolean = true): Config_RpcEndpointsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Config_RpcEndpointsEntryAminoMsg): Config_RpcEndpointsEntry {
    return Config_RpcEndpointsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Config_RpcEndpointsEntryProtoMsg, useInterfaces: boolean = true): Config_RpcEndpointsEntry {
    return Config_RpcEndpointsEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Config_RpcEndpointsEntry): Uint8Array {
    return Config_RpcEndpointsEntry.encode(message).finish();
  }
};
function createBaseConfig_AssetsEntry(): Config_AssetsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const Config_AssetsEntry = {
  encode(message: Config_AssetsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AssetConfig.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Config_AssetsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig_AssetsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = AssetConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Config_AssetsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AssetConfig.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: Config_AssetsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? AssetConfig.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Config_AssetsEntry>): Config_AssetsEntry {
    const message = createBaseConfig_AssetsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? AssetConfig.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: Config_AssetsEntryAmino): Config_AssetsEntry {
    const message = createBaseConfig_AssetsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = AssetConfig.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: Config_AssetsEntry, useInterfaces: boolean = true): Config_AssetsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? AssetConfig.toAmino(message.value, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: Config_AssetsEntryAminoMsg): Config_AssetsEntry {
    return Config_AssetsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Config_AssetsEntryProtoMsg, useInterfaces: boolean = true): Config_AssetsEntry {
    return Config_AssetsEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Config_AssetsEntry): Uint8Array {
    return Config_AssetsEntry.encode(message).finish();
  }
};
function createBaseConfig(): Config {
  return {
    productionMode: false,
    stableCoins: [],
    favoritePairsMaxCount: 0,
    metricCalculationIntervalBlocks: 0,
    enableFakePriceGenerator: false,
    rpcEndpoints: {},
    databaseConfig: DatabaseConfig.fromPartial({}),
    chainConfig: ChainConfig.fromPartial({}),
    loggerConfig: LoggerConfig.fromPartial({}),
    indexerConfig: IndexerConfig.fromPartial({}),
    profilerConfig: ProfilerConfig.fromPartial({}),
    yieldReturnConfig: YieldReturnConfig.fromPartial({}),
    faucetConfig: FaucetConfig.fromPartial({}),
    assets: {},
    pvaultFactoryContractAddress: "",
    supportedDenomsForExternalPrice: [],
    contracts: Contracts.fromPartial({}),
    incentives: Incentives.fromPartial({})
  };
}
export const Config = {
  typeUrl: "/pryzmatics.server.common.Config",
  is(o: any): o is Config {
    return o && (o.$typeUrl === Config.typeUrl || typeof o.productionMode === "boolean" && Array.isArray(o.stableCoins) && (!o.stableCoins.length || StableCoinConfig.is(o.stableCoins[0])) && typeof o.favoritePairsMaxCount === "number" && typeof o.metricCalculationIntervalBlocks === "number" && typeof o.enableFakePriceGenerator === "boolean" && isSet(o.rpcEndpoints) && DatabaseConfig.is(o.databaseConfig) && ChainConfig.is(o.chainConfig) && LoggerConfig.is(o.loggerConfig) && IndexerConfig.is(o.indexerConfig) && ProfilerConfig.is(o.profilerConfig) && YieldReturnConfig.is(o.yieldReturnConfig) && FaucetConfig.is(o.faucetConfig) && isSet(o.assets) && typeof o.pvaultFactoryContractAddress === "string" && Array.isArray(o.supportedDenomsForExternalPrice) && (!o.supportedDenomsForExternalPrice.length || typeof o.supportedDenomsForExternalPrice[0] === "string") && Contracts.is(o.contracts) && Incentives.is(o.incentives));
  },
  isSDK(o: any): o is ConfigSDKType {
    return o && (o.$typeUrl === Config.typeUrl || typeof o.production_mode === "boolean" && Array.isArray(o.stable_coins) && (!o.stable_coins.length || StableCoinConfig.isSDK(o.stable_coins[0])) && typeof o.favorite_pairs_max_count === "number" && typeof o.metric_calculation_interval_blocks === "number" && typeof o.enableFakePriceGenerator === "boolean" && isSet(o.rpc_endpoints) && DatabaseConfig.isSDK(o.database_config) && ChainConfig.isSDK(o.chain_config) && LoggerConfig.isSDK(o.logger_config) && IndexerConfig.isSDK(o.indexer_config) && ProfilerConfig.isSDK(o.profiler_config) && YieldReturnConfig.isSDK(o.yield_return_config) && FaucetConfig.isSDK(o.faucet_config) && isSet(o.assets) && typeof o.pvault_factory_contract_address === "string" && Array.isArray(o.supported_denoms_for_external_price) && (!o.supported_denoms_for_external_price.length || typeof o.supported_denoms_for_external_price[0] === "string") && Contracts.isSDK(o.contracts) && Incentives.isSDK(o.incentives));
  },
  isAmino(o: any): o is ConfigAmino {
    return o && (o.$typeUrl === Config.typeUrl || typeof o.production_mode === "boolean" && Array.isArray(o.stable_coins) && (!o.stable_coins.length || StableCoinConfig.isAmino(o.stable_coins[0])) && typeof o.favorite_pairs_max_count === "number" && typeof o.metric_calculation_interval_blocks === "number" && typeof o.enableFakePriceGenerator === "boolean" && isSet(o.rpc_endpoints) && DatabaseConfig.isAmino(o.database_config) && ChainConfig.isAmino(o.chain_config) && LoggerConfig.isAmino(o.logger_config) && IndexerConfig.isAmino(o.indexer_config) && ProfilerConfig.isAmino(o.profiler_config) && YieldReturnConfig.isAmino(o.yield_return_config) && FaucetConfig.isAmino(o.faucet_config) && isSet(o.assets) && typeof o.pvault_factory_contract_address === "string" && Array.isArray(o.supported_denoms_for_external_price) && (!o.supported_denoms_for_external_price.length || typeof o.supported_denoms_for_external_price[0] === "string") && Contracts.isAmino(o.contracts) && Incentives.isAmino(o.incentives));
  },
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.productionMode === true) {
      writer.uint32(8).bool(message.productionMode);
    }
    for (const v of message.stableCoins) {
      StableCoinConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.favoritePairsMaxCount !== 0) {
      writer.uint32(24).int32(message.favoritePairsMaxCount);
    }
    if (message.metricCalculationIntervalBlocks !== 0) {
      writer.uint32(32).uint32(message.metricCalculationIntervalBlocks);
    }
    if (message.enableFakePriceGenerator === true) {
      writer.uint32(40).bool(message.enableFakePriceGenerator);
    }
    Object.entries(message.rpcEndpoints).forEach(([key, value]) => {
      Config_RpcEndpointsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.databaseConfig !== undefined) {
      DatabaseConfig.encode(message.databaseConfig, writer.uint32(58).fork()).ldelim();
    }
    if (message.chainConfig !== undefined) {
      ChainConfig.encode(message.chainConfig, writer.uint32(66).fork()).ldelim();
    }
    if (message.loggerConfig !== undefined) {
      LoggerConfig.encode(message.loggerConfig, writer.uint32(74).fork()).ldelim();
    }
    if (message.indexerConfig !== undefined) {
      IndexerConfig.encode(message.indexerConfig, writer.uint32(82).fork()).ldelim();
    }
    if (message.profilerConfig !== undefined) {
      ProfilerConfig.encode(message.profilerConfig, writer.uint32(90).fork()).ldelim();
    }
    if (message.yieldReturnConfig !== undefined) {
      YieldReturnConfig.encode(message.yieldReturnConfig, writer.uint32(98).fork()).ldelim();
    }
    if (message.faucetConfig !== undefined) {
      FaucetConfig.encode(message.faucetConfig, writer.uint32(106).fork()).ldelim();
    }
    Object.entries(message.assets).forEach(([key, value]) => {
      Config_AssetsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(114).fork()).ldelim();
    });
    if (message.pvaultFactoryContractAddress !== "") {
      writer.uint32(122).string(message.pvaultFactoryContractAddress);
    }
    for (const v of message.supportedDenomsForExternalPrice) {
      writer.uint32(130).string(v!);
    }
    if (message.contracts !== undefined) {
      Contracts.encode(message.contracts, writer.uint32(138).fork()).ldelim();
    }
    if (message.incentives !== undefined) {
      Incentives.encode(message.incentives, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productionMode = reader.bool();
          break;
        case 2:
          message.stableCoins.push(StableCoinConfig.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.favoritePairsMaxCount = reader.int32();
          break;
        case 4:
          message.metricCalculationIntervalBlocks = reader.uint32();
          break;
        case 5:
          message.enableFakePriceGenerator = reader.bool();
          break;
        case 6:
          const entry6 = Config_RpcEndpointsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.rpcEndpoints[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.databaseConfig = DatabaseConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.chainConfig = ChainConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.loggerConfig = LoggerConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 10:
          message.indexerConfig = IndexerConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 11:
          message.profilerConfig = ProfilerConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 12:
          message.yieldReturnConfig = YieldReturnConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 13:
          message.faucetConfig = FaucetConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 14:
          const entry14 = Config_AssetsEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.assets[entry14.key] = entry14.value;
          }
          break;
        case 15:
          message.pvaultFactoryContractAddress = reader.string();
          break;
        case 16:
          message.supportedDenomsForExternalPrice.push(reader.string());
          break;
        case 17:
          message.contracts = Contracts.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 18:
          message.incentives = Incentives.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Config {
    return {
      productionMode: isSet(object.productionMode) ? Boolean(object.productionMode) : false,
      stableCoins: Array.isArray(object?.stableCoins) ? object.stableCoins.map((e: any) => StableCoinConfig.fromJSON(e)) : [],
      favoritePairsMaxCount: isSet(object.favoritePairsMaxCount) ? Number(object.favoritePairsMaxCount) : 0,
      metricCalculationIntervalBlocks: isSet(object.metricCalculationIntervalBlocks) ? Number(object.metricCalculationIntervalBlocks) : 0,
      enableFakePriceGenerator: isSet(object.enableFakePriceGenerator) ? Boolean(object.enableFakePriceGenerator) : false,
      rpcEndpoints: isObject(object.rpcEndpoints) ? Object.entries(object.rpcEndpoints).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      databaseConfig: isSet(object.databaseConfig) ? DatabaseConfig.fromJSON(object.databaseConfig) : undefined,
      chainConfig: isSet(object.chainConfig) ? ChainConfig.fromJSON(object.chainConfig) : undefined,
      loggerConfig: isSet(object.loggerConfig) ? LoggerConfig.fromJSON(object.loggerConfig) : undefined,
      indexerConfig: isSet(object.indexerConfig) ? IndexerConfig.fromJSON(object.indexerConfig) : undefined,
      profilerConfig: isSet(object.profilerConfig) ? ProfilerConfig.fromJSON(object.profilerConfig) : undefined,
      yieldReturnConfig: isSet(object.yieldReturnConfig) ? YieldReturnConfig.fromJSON(object.yieldReturnConfig) : undefined,
      faucetConfig: isSet(object.faucetConfig) ? FaucetConfig.fromJSON(object.faucetConfig) : undefined,
      assets: isObject(object.assets) ? Object.entries(object.assets).reduce<{
        [key: string]: AssetConfig;
      }>((acc, [key, value]) => {
        acc[key] = AssetConfig.fromJSON(value);
        return acc;
      }, {}) : {},
      pvaultFactoryContractAddress: isSet(object.pvaultFactoryContractAddress) ? String(object.pvaultFactoryContractAddress) : "",
      supportedDenomsForExternalPrice: Array.isArray(object?.supportedDenomsForExternalPrice) ? object.supportedDenomsForExternalPrice.map((e: any) => String(e)) : [],
      contracts: isSet(object.contracts) ? Contracts.fromJSON(object.contracts) : undefined,
      incentives: isSet(object.incentives) ? Incentives.fromJSON(object.incentives) : undefined
    };
  },
  toJSON(message: Config): unknown {
    const obj: any = {};
    message.productionMode !== undefined && (obj.productionMode = message.productionMode);
    if (message.stableCoins) {
      obj.stableCoins = message.stableCoins.map(e => e ? StableCoinConfig.toJSON(e) : undefined);
    } else {
      obj.stableCoins = [];
    }
    message.favoritePairsMaxCount !== undefined && (obj.favoritePairsMaxCount = Math.round(message.favoritePairsMaxCount));
    message.metricCalculationIntervalBlocks !== undefined && (obj.metricCalculationIntervalBlocks = Math.round(message.metricCalculationIntervalBlocks));
    message.enableFakePriceGenerator !== undefined && (obj.enableFakePriceGenerator = message.enableFakePriceGenerator);
    obj.rpcEndpoints = {};
    if (message.rpcEndpoints) {
      Object.entries(message.rpcEndpoints).forEach(([k, v]) => {
        obj.rpcEndpoints[k] = v;
      });
    }
    message.databaseConfig !== undefined && (obj.databaseConfig = message.databaseConfig ? DatabaseConfig.toJSON(message.databaseConfig) : undefined);
    message.chainConfig !== undefined && (obj.chainConfig = message.chainConfig ? ChainConfig.toJSON(message.chainConfig) : undefined);
    message.loggerConfig !== undefined && (obj.loggerConfig = message.loggerConfig ? LoggerConfig.toJSON(message.loggerConfig) : undefined);
    message.indexerConfig !== undefined && (obj.indexerConfig = message.indexerConfig ? IndexerConfig.toJSON(message.indexerConfig) : undefined);
    message.profilerConfig !== undefined && (obj.profilerConfig = message.profilerConfig ? ProfilerConfig.toJSON(message.profilerConfig) : undefined);
    message.yieldReturnConfig !== undefined && (obj.yieldReturnConfig = message.yieldReturnConfig ? YieldReturnConfig.toJSON(message.yieldReturnConfig) : undefined);
    message.faucetConfig !== undefined && (obj.faucetConfig = message.faucetConfig ? FaucetConfig.toJSON(message.faucetConfig) : undefined);
    obj.assets = {};
    if (message.assets) {
      Object.entries(message.assets).forEach(([k, v]) => {
        obj.assets[k] = AssetConfig.toJSON(v);
      });
    }
    message.pvaultFactoryContractAddress !== undefined && (obj.pvaultFactoryContractAddress = message.pvaultFactoryContractAddress);
    if (message.supportedDenomsForExternalPrice) {
      obj.supportedDenomsForExternalPrice = message.supportedDenomsForExternalPrice.map(e => e);
    } else {
      obj.supportedDenomsForExternalPrice = [];
    }
    message.contracts !== undefined && (obj.contracts = message.contracts ? Contracts.toJSON(message.contracts) : undefined);
    message.incentives !== undefined && (obj.incentives = message.incentives ? Incentives.toJSON(message.incentives) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Config>): Config {
    const message = createBaseConfig();
    message.productionMode = object.productionMode ?? false;
    message.stableCoins = object.stableCoins?.map(e => StableCoinConfig.fromPartial(e)) || [];
    message.favoritePairsMaxCount = object.favoritePairsMaxCount ?? 0;
    message.metricCalculationIntervalBlocks = object.metricCalculationIntervalBlocks ?? 0;
    message.enableFakePriceGenerator = object.enableFakePriceGenerator ?? false;
    message.rpcEndpoints = Object.entries(object.rpcEndpoints ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.databaseConfig = object.databaseConfig !== undefined && object.databaseConfig !== null ? DatabaseConfig.fromPartial(object.databaseConfig) : undefined;
    message.chainConfig = object.chainConfig !== undefined && object.chainConfig !== null ? ChainConfig.fromPartial(object.chainConfig) : undefined;
    message.loggerConfig = object.loggerConfig !== undefined && object.loggerConfig !== null ? LoggerConfig.fromPartial(object.loggerConfig) : undefined;
    message.indexerConfig = object.indexerConfig !== undefined && object.indexerConfig !== null ? IndexerConfig.fromPartial(object.indexerConfig) : undefined;
    message.profilerConfig = object.profilerConfig !== undefined && object.profilerConfig !== null ? ProfilerConfig.fromPartial(object.profilerConfig) : undefined;
    message.yieldReturnConfig = object.yieldReturnConfig !== undefined && object.yieldReturnConfig !== null ? YieldReturnConfig.fromPartial(object.yieldReturnConfig) : undefined;
    message.faucetConfig = object.faucetConfig !== undefined && object.faucetConfig !== null ? FaucetConfig.fromPartial(object.faucetConfig) : undefined;
    message.assets = Object.entries(object.assets ?? {}).reduce<{
      [key: string]: AssetConfig;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = AssetConfig.fromPartial(value);
      }
      return acc;
    }, {});
    message.pvaultFactoryContractAddress = object.pvaultFactoryContractAddress ?? "";
    message.supportedDenomsForExternalPrice = object.supportedDenomsForExternalPrice?.map(e => e) || [];
    message.contracts = object.contracts !== undefined && object.contracts !== null ? Contracts.fromPartial(object.contracts) : undefined;
    message.incentives = object.incentives !== undefined && object.incentives !== null ? Incentives.fromPartial(object.incentives) : undefined;
    return message;
  },
  fromAmino(object: ConfigAmino): Config {
    const message = createBaseConfig();
    if (object.production_mode !== undefined && object.production_mode !== null) {
      message.productionMode = object.production_mode;
    }
    message.stableCoins = object.stable_coins?.map(e => StableCoinConfig.fromAmino(e)) || [];
    if (object.favorite_pairs_max_count !== undefined && object.favorite_pairs_max_count !== null) {
      message.favoritePairsMaxCount = object.favorite_pairs_max_count;
    }
    if (object.metric_calculation_interval_blocks !== undefined && object.metric_calculation_interval_blocks !== null) {
      message.metricCalculationIntervalBlocks = object.metric_calculation_interval_blocks;
    }
    if (object.enableFakePriceGenerator !== undefined && object.enableFakePriceGenerator !== null) {
      message.enableFakePriceGenerator = object.enableFakePriceGenerator;
    }
    message.rpcEndpoints = Object.entries(object.rpc_endpoints ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.database_config !== undefined && object.database_config !== null) {
      message.databaseConfig = DatabaseConfig.fromAmino(object.database_config);
    }
    if (object.chain_config !== undefined && object.chain_config !== null) {
      message.chainConfig = ChainConfig.fromAmino(object.chain_config);
    }
    if (object.logger_config !== undefined && object.logger_config !== null) {
      message.loggerConfig = LoggerConfig.fromAmino(object.logger_config);
    }
    if (object.indexer_config !== undefined && object.indexer_config !== null) {
      message.indexerConfig = IndexerConfig.fromAmino(object.indexer_config);
    }
    if (object.profiler_config !== undefined && object.profiler_config !== null) {
      message.profilerConfig = ProfilerConfig.fromAmino(object.profiler_config);
    }
    if (object.yield_return_config !== undefined && object.yield_return_config !== null) {
      message.yieldReturnConfig = YieldReturnConfig.fromAmino(object.yield_return_config);
    }
    if (object.faucet_config !== undefined && object.faucet_config !== null) {
      message.faucetConfig = FaucetConfig.fromAmino(object.faucet_config);
    }
    message.assets = Object.entries(object.assets ?? {}).reduce<{
      [key: string]: AssetConfig;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = AssetConfig.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.pvault_factory_contract_address !== undefined && object.pvault_factory_contract_address !== null) {
      message.pvaultFactoryContractAddress = object.pvault_factory_contract_address;
    }
    message.supportedDenomsForExternalPrice = object.supported_denoms_for_external_price?.map(e => e) || [];
    if (object.contracts !== undefined && object.contracts !== null) {
      message.contracts = Contracts.fromAmino(object.contracts);
    }
    if (object.incentives !== undefined && object.incentives !== null) {
      message.incentives = Incentives.fromAmino(object.incentives);
    }
    return message;
  },
  toAmino(message: Config, useInterfaces: boolean = true): ConfigAmino {
    const obj: any = {};
    obj.production_mode = message.productionMode === false ? undefined : message.productionMode;
    if (message.stableCoins) {
      obj.stable_coins = message.stableCoins.map(e => e ? StableCoinConfig.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.stable_coins = message.stableCoins;
    }
    obj.favorite_pairs_max_count = message.favoritePairsMaxCount === 0 ? undefined : message.favoritePairsMaxCount;
    obj.metric_calculation_interval_blocks = message.metricCalculationIntervalBlocks === 0 ? undefined : message.metricCalculationIntervalBlocks;
    obj.enableFakePriceGenerator = message.enableFakePriceGenerator === false ? undefined : message.enableFakePriceGenerator;
    obj.rpc_endpoints = {};
    if (message.rpcEndpoints) {
      Object.entries(message.rpcEndpoints).forEach(([k, v]) => {
        obj.rpc_endpoints[k] = v;
      });
    }
    obj.database_config = message.databaseConfig ? DatabaseConfig.toAmino(message.databaseConfig, useInterfaces) : undefined;
    obj.chain_config = message.chainConfig ? ChainConfig.toAmino(message.chainConfig, useInterfaces) : undefined;
    obj.logger_config = message.loggerConfig ? LoggerConfig.toAmino(message.loggerConfig, useInterfaces) : undefined;
    obj.indexer_config = message.indexerConfig ? IndexerConfig.toAmino(message.indexerConfig, useInterfaces) : undefined;
    obj.profiler_config = message.profilerConfig ? ProfilerConfig.toAmino(message.profilerConfig, useInterfaces) : undefined;
    obj.yield_return_config = message.yieldReturnConfig ? YieldReturnConfig.toAmino(message.yieldReturnConfig, useInterfaces) : undefined;
    obj.faucet_config = message.faucetConfig ? FaucetConfig.toAmino(message.faucetConfig, useInterfaces) : undefined;
    obj.assets = {};
    if (message.assets) {
      Object.entries(message.assets).forEach(([k, v]) => {
        obj.assets[k] = AssetConfig.toAmino(v);
      });
    }
    obj.pvault_factory_contract_address = message.pvaultFactoryContractAddress === "" ? undefined : message.pvaultFactoryContractAddress;
    if (message.supportedDenomsForExternalPrice) {
      obj.supported_denoms_for_external_price = message.supportedDenomsForExternalPrice.map(e => e);
    } else {
      obj.supported_denoms_for_external_price = message.supportedDenomsForExternalPrice;
    }
    obj.contracts = message.contracts ? Contracts.toAmino(message.contracts, useInterfaces) : undefined;
    obj.incentives = message.incentives ? Incentives.toAmino(message.incentives, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfigAminoMsg): Config {
    return Config.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigProtoMsg, useInterfaces: boolean = true): Config {
    return Config.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Config): Uint8Array {
    return Config.encode(message).finish();
  },
  toProtoMsg(message: Config): ConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.Config",
      value: Config.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Config.typeUrl, Config);
function createBaseContracts(): Contracts {
  return {
    pryzmNexus: "",
    yLaunchFactory: "",
    pVaultFactory: "",
    orderBook: "",
    pryzmPhotonDropClaim1: "",
    pryzmPhotonDropClaim2: "",
    pryzmStakeDropClaim: ""
  };
}
export const Contracts = {
  typeUrl: "/pryzmatics.server.common.Contracts",
  is(o: any): o is Contracts {
    return o && (o.$typeUrl === Contracts.typeUrl || typeof o.pryzmNexus === "string" && typeof o.yLaunchFactory === "string" && typeof o.pVaultFactory === "string" && typeof o.orderBook === "string" && typeof o.pryzmPhotonDropClaim1 === "string" && typeof o.pryzmPhotonDropClaim2 === "string" && typeof o.pryzmStakeDropClaim === "string");
  },
  isSDK(o: any): o is ContractsSDKType {
    return o && (o.$typeUrl === Contracts.typeUrl || typeof o.pryzm_nexus === "string" && typeof o.y_launch_factory === "string" && typeof o.p_vault_factory === "string" && typeof o.order_book === "string" && typeof o.pryzm_photon_drop_claim1 === "string" && typeof o.pryzm_photon_drop_claim2 === "string" && typeof o.pryzm_stake_drop_claim === "string");
  },
  isAmino(o: any): o is ContractsAmino {
    return o && (o.$typeUrl === Contracts.typeUrl || typeof o.pryzm_nexus === "string" && typeof o.y_launch_factory === "string" && typeof o.p_vault_factory === "string" && typeof o.order_book === "string" && typeof o.pryzm_photon_drop_claim1 === "string" && typeof o.pryzm_photon_drop_claim2 === "string" && typeof o.pryzm_stake_drop_claim === "string");
  },
  encode(message: Contracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pryzmNexus !== "") {
      writer.uint32(10).string(message.pryzmNexus);
    }
    if (message.yLaunchFactory !== "") {
      writer.uint32(18).string(message.yLaunchFactory);
    }
    if (message.pVaultFactory !== "") {
      writer.uint32(26).string(message.pVaultFactory);
    }
    if (message.orderBook !== "") {
      writer.uint32(34).string(message.orderBook);
    }
    if (message.pryzmPhotonDropClaim1 !== "") {
      writer.uint32(42).string(message.pryzmPhotonDropClaim1);
    }
    if (message.pryzmPhotonDropClaim2 !== "") {
      writer.uint32(50).string(message.pryzmPhotonDropClaim2);
    }
    if (message.pryzmStakeDropClaim !== "") {
      writer.uint32(58).string(message.pryzmStakeDropClaim);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Contracts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pryzmNexus = reader.string();
          break;
        case 2:
          message.yLaunchFactory = reader.string();
          break;
        case 3:
          message.pVaultFactory = reader.string();
          break;
        case 4:
          message.orderBook = reader.string();
          break;
        case 5:
          message.pryzmPhotonDropClaim1 = reader.string();
          break;
        case 6:
          message.pryzmPhotonDropClaim2 = reader.string();
          break;
        case 7:
          message.pryzmStakeDropClaim = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Contracts {
    return {
      pryzmNexus: isSet(object.pryzmNexus) ? String(object.pryzmNexus) : "",
      yLaunchFactory: isSet(object.yLaunchFactory) ? String(object.yLaunchFactory) : "",
      pVaultFactory: isSet(object.pVaultFactory) ? String(object.pVaultFactory) : "",
      orderBook: isSet(object.orderBook) ? String(object.orderBook) : "",
      pryzmPhotonDropClaim1: isSet(object.pryzmPhotonDropClaim1) ? String(object.pryzmPhotonDropClaim1) : "",
      pryzmPhotonDropClaim2: isSet(object.pryzmPhotonDropClaim2) ? String(object.pryzmPhotonDropClaim2) : "",
      pryzmStakeDropClaim: isSet(object.pryzmStakeDropClaim) ? String(object.pryzmStakeDropClaim) : ""
    };
  },
  toJSON(message: Contracts): unknown {
    const obj: any = {};
    message.pryzmNexus !== undefined && (obj.pryzmNexus = message.pryzmNexus);
    message.yLaunchFactory !== undefined && (obj.yLaunchFactory = message.yLaunchFactory);
    message.pVaultFactory !== undefined && (obj.pVaultFactory = message.pVaultFactory);
    message.orderBook !== undefined && (obj.orderBook = message.orderBook);
    message.pryzmPhotonDropClaim1 !== undefined && (obj.pryzmPhotonDropClaim1 = message.pryzmPhotonDropClaim1);
    message.pryzmPhotonDropClaim2 !== undefined && (obj.pryzmPhotonDropClaim2 = message.pryzmPhotonDropClaim2);
    message.pryzmStakeDropClaim !== undefined && (obj.pryzmStakeDropClaim = message.pryzmStakeDropClaim);
    return obj;
  },
  fromPartial(object: Partial<Contracts>): Contracts {
    const message = createBaseContracts();
    message.pryzmNexus = object.pryzmNexus ?? "";
    message.yLaunchFactory = object.yLaunchFactory ?? "";
    message.pVaultFactory = object.pVaultFactory ?? "";
    message.orderBook = object.orderBook ?? "";
    message.pryzmPhotonDropClaim1 = object.pryzmPhotonDropClaim1 ?? "";
    message.pryzmPhotonDropClaim2 = object.pryzmPhotonDropClaim2 ?? "";
    message.pryzmStakeDropClaim = object.pryzmStakeDropClaim ?? "";
    return message;
  },
  fromAmino(object: ContractsAmino): Contracts {
    const message = createBaseContracts();
    if (object.pryzm_nexus !== undefined && object.pryzm_nexus !== null) {
      message.pryzmNexus = object.pryzm_nexus;
    }
    if (object.y_launch_factory !== undefined && object.y_launch_factory !== null) {
      message.yLaunchFactory = object.y_launch_factory;
    }
    if (object.p_vault_factory !== undefined && object.p_vault_factory !== null) {
      message.pVaultFactory = object.p_vault_factory;
    }
    if (object.order_book !== undefined && object.order_book !== null) {
      message.orderBook = object.order_book;
    }
    if (object.pryzm_photon_drop_claim1 !== undefined && object.pryzm_photon_drop_claim1 !== null) {
      message.pryzmPhotonDropClaim1 = object.pryzm_photon_drop_claim1;
    }
    if (object.pryzm_photon_drop_claim2 !== undefined && object.pryzm_photon_drop_claim2 !== null) {
      message.pryzmPhotonDropClaim2 = object.pryzm_photon_drop_claim2;
    }
    if (object.pryzm_stake_drop_claim !== undefined && object.pryzm_stake_drop_claim !== null) {
      message.pryzmStakeDropClaim = object.pryzm_stake_drop_claim;
    }
    return message;
  },
  toAmino(message: Contracts, useInterfaces: boolean = true): ContractsAmino {
    const obj: any = {};
    obj.pryzm_nexus = message.pryzmNexus === "" ? undefined : message.pryzmNexus;
    obj.y_launch_factory = message.yLaunchFactory === "" ? undefined : message.yLaunchFactory;
    obj.p_vault_factory = message.pVaultFactory === "" ? undefined : message.pVaultFactory;
    obj.order_book = message.orderBook === "" ? undefined : message.orderBook;
    obj.pryzm_photon_drop_claim1 = message.pryzmPhotonDropClaim1 === "" ? undefined : message.pryzmPhotonDropClaim1;
    obj.pryzm_photon_drop_claim2 = message.pryzmPhotonDropClaim2 === "" ? undefined : message.pryzmPhotonDropClaim2;
    obj.pryzm_stake_drop_claim = message.pryzmStakeDropClaim === "" ? undefined : message.pryzmStakeDropClaim;
    return obj;
  },
  fromAminoMsg(object: ContractsAminoMsg): Contracts {
    return Contracts.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractsProtoMsg, useInterfaces: boolean = true): Contracts {
    return Contracts.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Contracts): Uint8Array {
    return Contracts.encode(message).finish();
  },
  toProtoMsg(message: Contracts): ContractsProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.Contracts",
      value: Contracts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Contracts.typeUrl, Contracts);
function createBaseIncentives(): Incentives {
  return {
    pools: []
  };
}
export const Incentives = {
  typeUrl: "/pryzmatics.server.common.Incentives",
  is(o: any): o is Incentives {
    return o && (o.$typeUrl === Incentives.typeUrl || Array.isArray(o.pools) && (!o.pools.length || IncentivesPool.is(o.pools[0])));
  },
  isSDK(o: any): o is IncentivesSDKType {
    return o && (o.$typeUrl === Incentives.typeUrl || Array.isArray(o.pools) && (!o.pools.length || IncentivesPool.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is IncentivesAmino {
    return o && (o.$typeUrl === Incentives.typeUrl || Array.isArray(o.pools) && (!o.pools.length || IncentivesPool.isAmino(o.pools[0])));
  },
  encode(message: Incentives, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      IncentivesPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Incentives {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentives();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(IncentivesPool.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Incentives {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => IncentivesPool.fromJSON(e)) : []
    };
  },
  toJSON(message: Incentives): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? IncentivesPool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Incentives>): Incentives {
    const message = createBaseIncentives();
    message.pools = object.pools?.map(e => IncentivesPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IncentivesAmino): Incentives {
    const message = createBaseIncentives();
    message.pools = object.pools?.map(e => IncentivesPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Incentives, useInterfaces: boolean = true): IncentivesAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? IncentivesPool.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: IncentivesAminoMsg): Incentives {
    return Incentives.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentivesProtoMsg, useInterfaces: boolean = true): Incentives {
    return Incentives.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Incentives): Uint8Array {
    return Incentives.encode(message).finish();
  },
  toProtoMsg(message: Incentives): IncentivesProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.Incentives",
      value: Incentives.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Incentives.typeUrl, Incentives);
function createBaseIncentivesPool(): IncentivesPool {
  return {
    apr: 0,
    bondedToken: "",
    rewardToken: ""
  };
}
export const IncentivesPool = {
  typeUrl: "/pryzmatics.server.common.IncentivesPool",
  is(o: any): o is IncentivesPool {
    return o && (o.$typeUrl === IncentivesPool.typeUrl || typeof o.apr === "number" && typeof o.bondedToken === "string" && typeof o.rewardToken === "string");
  },
  isSDK(o: any): o is IncentivesPoolSDKType {
    return o && (o.$typeUrl === IncentivesPool.typeUrl || typeof o.apr === "number" && typeof o.bonded_token === "string" && typeof o.reward_token === "string");
  },
  isAmino(o: any): o is IncentivesPoolAmino {
    return o && (o.$typeUrl === IncentivesPool.typeUrl || typeof o.apr === "number" && typeof o.bonded_token === "string" && typeof o.reward_token === "string");
  },
  encode(message: IncentivesPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apr !== 0) {
      writer.uint32(13).float(message.apr);
    }
    if (message.bondedToken !== "") {
      writer.uint32(18).string(message.bondedToken);
    }
    if (message.rewardToken !== "") {
      writer.uint32(26).string(message.rewardToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): IncentivesPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivesPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apr = reader.float();
          break;
        case 2:
          message.bondedToken = reader.string();
          break;
        case 3:
          message.rewardToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentivesPool {
    return {
      apr: isSet(object.apr) ? Number(object.apr) : 0,
      bondedToken: isSet(object.bondedToken) ? String(object.bondedToken) : "",
      rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : ""
    };
  },
  toJSON(message: IncentivesPool): unknown {
    const obj: any = {};
    message.apr !== undefined && (obj.apr = message.apr);
    message.bondedToken !== undefined && (obj.bondedToken = message.bondedToken);
    message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
    return obj;
  },
  fromPartial(object: Partial<IncentivesPool>): IncentivesPool {
    const message = createBaseIncentivesPool();
    message.apr = object.apr ?? 0;
    message.bondedToken = object.bondedToken ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  },
  fromAmino(object: IncentivesPoolAmino): IncentivesPool {
    const message = createBaseIncentivesPool();
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = object.apr;
    }
    if (object.bonded_token !== undefined && object.bonded_token !== null) {
      message.bondedToken = object.bonded_token;
    }
    if (object.reward_token !== undefined && object.reward_token !== null) {
      message.rewardToken = object.reward_token;
    }
    return message;
  },
  toAmino(message: IncentivesPool, useInterfaces: boolean = true): IncentivesPoolAmino {
    const obj: any = {};
    obj.apr = message.apr === 0 ? undefined : message.apr;
    obj.bonded_token = message.bondedToken === "" ? undefined : message.bondedToken;
    obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
    return obj;
  },
  fromAminoMsg(object: IncentivesPoolAminoMsg): IncentivesPool {
    return IncentivesPool.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentivesPoolProtoMsg, useInterfaces: boolean = true): IncentivesPool {
    return IncentivesPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: IncentivesPool): Uint8Array {
    return IncentivesPool.encode(message).finish();
  },
  toProtoMsg(message: IncentivesPool): IncentivesPoolProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.IncentivesPool",
      value: IncentivesPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IncentivesPool.typeUrl, IncentivesPool);
function createBaseDatabaseConfig(): DatabaseConfig {
  return {
    poolMinConns: 0,
    poolMaxConns: 0,
    queryLoggerEnabled: false,
    migrationDisabled: false
  };
}
export const DatabaseConfig = {
  typeUrl: "/pryzmatics.server.common.DatabaseConfig",
  is(o: any): o is DatabaseConfig {
    return o && (o.$typeUrl === DatabaseConfig.typeUrl || typeof o.poolMinConns === "number" && typeof o.poolMaxConns === "number" && typeof o.queryLoggerEnabled === "boolean" && typeof o.migrationDisabled === "boolean");
  },
  isSDK(o: any): o is DatabaseConfigSDKType {
    return o && (o.$typeUrl === DatabaseConfig.typeUrl || typeof o.pool_min_conns === "number" && typeof o.pool_max_conns === "number" && typeof o.query_logger_enabled === "boolean" && typeof o.migration_disabled === "boolean");
  },
  isAmino(o: any): o is DatabaseConfigAmino {
    return o && (o.$typeUrl === DatabaseConfig.typeUrl || typeof o.pool_min_conns === "number" && typeof o.pool_max_conns === "number" && typeof o.query_logger_enabled === "boolean" && typeof o.migration_disabled === "boolean");
  },
  encode(message: DatabaseConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolMinConns !== 0) {
      writer.uint32(8).int32(message.poolMinConns);
    }
    if (message.poolMaxConns !== 0) {
      writer.uint32(16).int32(message.poolMaxConns);
    }
    if (message.queryLoggerEnabled === true) {
      writer.uint32(24).bool(message.queryLoggerEnabled);
    }
    if (message.migrationDisabled === true) {
      writer.uint32(32).bool(message.migrationDisabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DatabaseConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolMinConns = reader.int32();
          break;
        case 2:
          message.poolMaxConns = reader.int32();
          break;
        case 3:
          message.queryLoggerEnabled = reader.bool();
          break;
        case 4:
          message.migrationDisabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DatabaseConfig {
    return {
      poolMinConns: isSet(object.poolMinConns) ? Number(object.poolMinConns) : 0,
      poolMaxConns: isSet(object.poolMaxConns) ? Number(object.poolMaxConns) : 0,
      queryLoggerEnabled: isSet(object.queryLoggerEnabled) ? Boolean(object.queryLoggerEnabled) : false,
      migrationDisabled: isSet(object.migrationDisabled) ? Boolean(object.migrationDisabled) : false
    };
  },
  toJSON(message: DatabaseConfig): unknown {
    const obj: any = {};
    message.poolMinConns !== undefined && (obj.poolMinConns = Math.round(message.poolMinConns));
    message.poolMaxConns !== undefined && (obj.poolMaxConns = Math.round(message.poolMaxConns));
    message.queryLoggerEnabled !== undefined && (obj.queryLoggerEnabled = message.queryLoggerEnabled);
    message.migrationDisabled !== undefined && (obj.migrationDisabled = message.migrationDisabled);
    return obj;
  },
  fromPartial(object: Partial<DatabaseConfig>): DatabaseConfig {
    const message = createBaseDatabaseConfig();
    message.poolMinConns = object.poolMinConns ?? 0;
    message.poolMaxConns = object.poolMaxConns ?? 0;
    message.queryLoggerEnabled = object.queryLoggerEnabled ?? false;
    message.migrationDisabled = object.migrationDisabled ?? false;
    return message;
  },
  fromAmino(object: DatabaseConfigAmino): DatabaseConfig {
    const message = createBaseDatabaseConfig();
    if (object.pool_min_conns !== undefined && object.pool_min_conns !== null) {
      message.poolMinConns = object.pool_min_conns;
    }
    if (object.pool_max_conns !== undefined && object.pool_max_conns !== null) {
      message.poolMaxConns = object.pool_max_conns;
    }
    if (object.query_logger_enabled !== undefined && object.query_logger_enabled !== null) {
      message.queryLoggerEnabled = object.query_logger_enabled;
    }
    if (object.migration_disabled !== undefined && object.migration_disabled !== null) {
      message.migrationDisabled = object.migration_disabled;
    }
    return message;
  },
  toAmino(message: DatabaseConfig, useInterfaces: boolean = true): DatabaseConfigAmino {
    const obj: any = {};
    obj.pool_min_conns = message.poolMinConns === 0 ? undefined : message.poolMinConns;
    obj.pool_max_conns = message.poolMaxConns === 0 ? undefined : message.poolMaxConns;
    obj.query_logger_enabled = message.queryLoggerEnabled === false ? undefined : message.queryLoggerEnabled;
    obj.migration_disabled = message.migrationDisabled === false ? undefined : message.migrationDisabled;
    return obj;
  },
  fromAminoMsg(object: DatabaseConfigAminoMsg): DatabaseConfig {
    return DatabaseConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: DatabaseConfigProtoMsg, useInterfaces: boolean = true): DatabaseConfig {
    return DatabaseConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DatabaseConfig): Uint8Array {
    return DatabaseConfig.encode(message).finish();
  },
  toProtoMsg(message: DatabaseConfig): DatabaseConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.DatabaseConfig",
      value: DatabaseConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DatabaseConfig.typeUrl, DatabaseConfig);
function createBaseChainConfig(): ChainConfig {
  return {
    rpcUrl: "",
    grpcUrl: "",
    apiUrl: "",
    syncIntervalMillis: 0
  };
}
export const ChainConfig = {
  typeUrl: "/pryzmatics.server.common.ChainConfig",
  is(o: any): o is ChainConfig {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.rpcUrl === "string" && typeof o.grpcUrl === "string" && typeof o.apiUrl === "string" && typeof o.syncIntervalMillis === "number");
  },
  isSDK(o: any): o is ChainConfigSDKType {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.rpc_url === "string" && typeof o.grpc_url === "string" && typeof o.api_url === "string" && typeof o.sync_interval_millis === "number");
  },
  isAmino(o: any): o is ChainConfigAmino {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.rpc_url === "string" && typeof o.grpc_url === "string" && typeof o.api_url === "string" && typeof o.sync_interval_millis === "number");
  },
  encode(message: ChainConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rpcUrl !== "") {
      writer.uint32(10).string(message.rpcUrl);
    }
    if (message.grpcUrl !== "") {
      writer.uint32(18).string(message.grpcUrl);
    }
    if (message.apiUrl !== "") {
      writer.uint32(26).string(message.apiUrl);
    }
    if (message.syncIntervalMillis !== 0) {
      writer.uint32(32).int32(message.syncIntervalMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ChainConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpcUrl = reader.string();
          break;
        case 2:
          message.grpcUrl = reader.string();
          break;
        case 3:
          message.apiUrl = reader.string();
          break;
        case 4:
          message.syncIntervalMillis = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainConfig {
    return {
      rpcUrl: isSet(object.rpcUrl) ? String(object.rpcUrl) : "",
      grpcUrl: isSet(object.grpcUrl) ? String(object.grpcUrl) : "",
      apiUrl: isSet(object.apiUrl) ? String(object.apiUrl) : "",
      syncIntervalMillis: isSet(object.syncIntervalMillis) ? Number(object.syncIntervalMillis) : 0
    };
  },
  toJSON(message: ChainConfig): unknown {
    const obj: any = {};
    message.rpcUrl !== undefined && (obj.rpcUrl = message.rpcUrl);
    message.grpcUrl !== undefined && (obj.grpcUrl = message.grpcUrl);
    message.apiUrl !== undefined && (obj.apiUrl = message.apiUrl);
    message.syncIntervalMillis !== undefined && (obj.syncIntervalMillis = Math.round(message.syncIntervalMillis));
    return obj;
  },
  fromPartial(object: Partial<ChainConfig>): ChainConfig {
    const message = createBaseChainConfig();
    message.rpcUrl = object.rpcUrl ?? "";
    message.grpcUrl = object.grpcUrl ?? "";
    message.apiUrl = object.apiUrl ?? "";
    message.syncIntervalMillis = object.syncIntervalMillis ?? 0;
    return message;
  },
  fromAmino(object: ChainConfigAmino): ChainConfig {
    const message = createBaseChainConfig();
    if (object.rpc_url !== undefined && object.rpc_url !== null) {
      message.rpcUrl = object.rpc_url;
    }
    if (object.grpc_url !== undefined && object.grpc_url !== null) {
      message.grpcUrl = object.grpc_url;
    }
    if (object.api_url !== undefined && object.api_url !== null) {
      message.apiUrl = object.api_url;
    }
    if (object.sync_interval_millis !== undefined && object.sync_interval_millis !== null) {
      message.syncIntervalMillis = object.sync_interval_millis;
    }
    return message;
  },
  toAmino(message: ChainConfig, useInterfaces: boolean = true): ChainConfigAmino {
    const obj: any = {};
    obj.rpc_url = message.rpcUrl === "" ? undefined : message.rpcUrl;
    obj.grpc_url = message.grpcUrl === "" ? undefined : message.grpcUrl;
    obj.api_url = message.apiUrl === "" ? undefined : message.apiUrl;
    obj.sync_interval_millis = message.syncIntervalMillis === 0 ? undefined : message.syncIntervalMillis;
    return obj;
  },
  fromAminoMsg(object: ChainConfigAminoMsg): ChainConfig {
    return ChainConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainConfigProtoMsg, useInterfaces: boolean = true): ChainConfig {
    return ChainConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ChainConfig): Uint8Array {
    return ChainConfig.encode(message).finish();
  },
  toProtoMsg(message: ChainConfig): ChainConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.ChainConfig",
      value: ChainConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChainConfig.typeUrl, ChainConfig);
function createBaseLoggerConfig(): LoggerConfig {
  return {
    level: "",
    file: "",
    maxSize: 0,
    maxBackups: 0,
    maxAgeDays: 0,
    compress: false,
    syslog: false,
    reportCaller: false
  };
}
export const LoggerConfig = {
  typeUrl: "/pryzmatics.server.common.LoggerConfig",
  is(o: any): o is LoggerConfig {
    return o && (o.$typeUrl === LoggerConfig.typeUrl || typeof o.level === "string" && typeof o.file === "string" && typeof o.maxSize === "number" && typeof o.maxBackups === "number" && typeof o.maxAgeDays === "number" && typeof o.compress === "boolean" && typeof o.syslog === "boolean" && typeof o.reportCaller === "boolean");
  },
  isSDK(o: any): o is LoggerConfigSDKType {
    return o && (o.$typeUrl === LoggerConfig.typeUrl || typeof o.level === "string" && typeof o.file === "string" && typeof o.max_size === "number" && typeof o.max_backups === "number" && typeof o.max_age_days === "number" && typeof o.compress === "boolean" && typeof o.syslog === "boolean" && typeof o.report_caller === "boolean");
  },
  isAmino(o: any): o is LoggerConfigAmino {
    return o && (o.$typeUrl === LoggerConfig.typeUrl || typeof o.level === "string" && typeof o.file === "string" && typeof o.max_size === "number" && typeof o.max_backups === "number" && typeof o.max_age_days === "number" && typeof o.compress === "boolean" && typeof o.syslog === "boolean" && typeof o.report_caller === "boolean");
  },
  encode(message: LoggerConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.level !== "") {
      writer.uint32(10).string(message.level);
    }
    if (message.file !== "") {
      writer.uint32(18).string(message.file);
    }
    if (message.maxSize !== 0) {
      writer.uint32(24).int32(message.maxSize);
    }
    if (message.maxBackups !== 0) {
      writer.uint32(32).int32(message.maxBackups);
    }
    if (message.maxAgeDays !== 0) {
      writer.uint32(40).int32(message.maxAgeDays);
    }
    if (message.compress === true) {
      writer.uint32(48).bool(message.compress);
    }
    if (message.syslog === true) {
      writer.uint32(56).bool(message.syslog);
    }
    if (message.reportCaller === true) {
      writer.uint32(64).bool(message.reportCaller);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LoggerConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoggerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.string();
          break;
        case 2:
          message.file = reader.string();
          break;
        case 3:
          message.maxSize = reader.int32();
          break;
        case 4:
          message.maxBackups = reader.int32();
          break;
        case 5:
          message.maxAgeDays = reader.int32();
          break;
        case 6:
          message.compress = reader.bool();
          break;
        case 7:
          message.syslog = reader.bool();
          break;
        case 8:
          message.reportCaller = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LoggerConfig {
    return {
      level: isSet(object.level) ? String(object.level) : "",
      file: isSet(object.file) ? String(object.file) : "",
      maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0,
      maxBackups: isSet(object.maxBackups) ? Number(object.maxBackups) : 0,
      maxAgeDays: isSet(object.maxAgeDays) ? Number(object.maxAgeDays) : 0,
      compress: isSet(object.compress) ? Boolean(object.compress) : false,
      syslog: isSet(object.syslog) ? Boolean(object.syslog) : false,
      reportCaller: isSet(object.reportCaller) ? Boolean(object.reportCaller) : false
    };
  },
  toJSON(message: LoggerConfig): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    message.file !== undefined && (obj.file = message.file);
    message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
    message.maxBackups !== undefined && (obj.maxBackups = Math.round(message.maxBackups));
    message.maxAgeDays !== undefined && (obj.maxAgeDays = Math.round(message.maxAgeDays));
    message.compress !== undefined && (obj.compress = message.compress);
    message.syslog !== undefined && (obj.syslog = message.syslog);
    message.reportCaller !== undefined && (obj.reportCaller = message.reportCaller);
    return obj;
  },
  fromPartial(object: Partial<LoggerConfig>): LoggerConfig {
    const message = createBaseLoggerConfig();
    message.level = object.level ?? "";
    message.file = object.file ?? "";
    message.maxSize = object.maxSize ?? 0;
    message.maxBackups = object.maxBackups ?? 0;
    message.maxAgeDays = object.maxAgeDays ?? 0;
    message.compress = object.compress ?? false;
    message.syslog = object.syslog ?? false;
    message.reportCaller = object.reportCaller ?? false;
    return message;
  },
  fromAmino(object: LoggerConfigAmino): LoggerConfig {
    const message = createBaseLoggerConfig();
    if (object.level !== undefined && object.level !== null) {
      message.level = object.level;
    }
    if (object.file !== undefined && object.file !== null) {
      message.file = object.file;
    }
    if (object.max_size !== undefined && object.max_size !== null) {
      message.maxSize = object.max_size;
    }
    if (object.max_backups !== undefined && object.max_backups !== null) {
      message.maxBackups = object.max_backups;
    }
    if (object.max_age_days !== undefined && object.max_age_days !== null) {
      message.maxAgeDays = object.max_age_days;
    }
    if (object.compress !== undefined && object.compress !== null) {
      message.compress = object.compress;
    }
    if (object.syslog !== undefined && object.syslog !== null) {
      message.syslog = object.syslog;
    }
    if (object.report_caller !== undefined && object.report_caller !== null) {
      message.reportCaller = object.report_caller;
    }
    return message;
  },
  toAmino(message: LoggerConfig, useInterfaces: boolean = true): LoggerConfigAmino {
    const obj: any = {};
    obj.level = message.level === "" ? undefined : message.level;
    obj.file = message.file === "" ? undefined : message.file;
    obj.max_size = message.maxSize === 0 ? undefined : message.maxSize;
    obj.max_backups = message.maxBackups === 0 ? undefined : message.maxBackups;
    obj.max_age_days = message.maxAgeDays === 0 ? undefined : message.maxAgeDays;
    obj.compress = message.compress === false ? undefined : message.compress;
    obj.syslog = message.syslog === false ? undefined : message.syslog;
    obj.report_caller = message.reportCaller === false ? undefined : message.reportCaller;
    return obj;
  },
  fromAminoMsg(object: LoggerConfigAminoMsg): LoggerConfig {
    return LoggerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: LoggerConfigProtoMsg, useInterfaces: boolean = true): LoggerConfig {
    return LoggerConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LoggerConfig): Uint8Array {
    return LoggerConfig.encode(message).finish();
  },
  toProtoMsg(message: LoggerConfig): LoggerConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.LoggerConfig",
      value: LoggerConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LoggerConfig.typeUrl, LoggerConfig);
function createBaseIndexerConfig(): IndexerConfig {
  return {
    disable: false,
    disableSyncForDebug: false,
    startBlock: BigInt(0),
    pauseAtBlock: BigInt(0),
    pruner: PrunerConfig.fromPartial({}),
    pauseAtUpgradePlanBlockHeight: BigInt(0)
  };
}
export const IndexerConfig = {
  typeUrl: "/pryzmatics.server.common.IndexerConfig",
  is(o: any): o is IndexerConfig {
    return o && (o.$typeUrl === IndexerConfig.typeUrl || typeof o.disable === "boolean" && typeof o.disableSyncForDebug === "boolean" && typeof o.startBlock === "bigint" && typeof o.pauseAtBlock === "bigint" && PrunerConfig.is(o.pruner) && typeof o.pauseAtUpgradePlanBlockHeight === "bigint");
  },
  isSDK(o: any): o is IndexerConfigSDKType {
    return o && (o.$typeUrl === IndexerConfig.typeUrl || typeof o.disable === "boolean" && typeof o.disable_sync_for_debug === "boolean" && typeof o.start_block === "bigint" && typeof o.pause_at_block === "bigint" && PrunerConfig.isSDK(o.pruner) && typeof o.pause_at_upgrade_plan_block_height === "bigint");
  },
  isAmino(o: any): o is IndexerConfigAmino {
    return o && (o.$typeUrl === IndexerConfig.typeUrl || typeof o.disable === "boolean" && typeof o.disable_sync_for_debug === "boolean" && typeof o.start_block === "bigint" && typeof o.pause_at_block === "bigint" && PrunerConfig.isAmino(o.pruner) && typeof o.pause_at_upgrade_plan_block_height === "bigint");
  },
  encode(message: IndexerConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.disable === true) {
      writer.uint32(8).bool(message.disable);
    }
    if (message.disableSyncForDebug === true) {
      writer.uint32(16).bool(message.disableSyncForDebug);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.startBlock);
    }
    if (message.pauseAtBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.pauseAtBlock);
    }
    if (message.pruner !== undefined) {
      PrunerConfig.encode(message.pruner, writer.uint32(42).fork()).ldelim();
    }
    if (message.pauseAtUpgradePlanBlockHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.pauseAtUpgradePlanBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): IndexerConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disable = reader.bool();
          break;
        case 2:
          message.disableSyncForDebug = reader.bool();
          break;
        case 3:
          message.startBlock = reader.int64();
          break;
        case 4:
          message.pauseAtBlock = reader.int64();
          break;
        case 5:
          message.pruner = PrunerConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.pauseAtUpgradePlanBlockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IndexerConfig {
    return {
      disable: isSet(object.disable) ? Boolean(object.disable) : false,
      disableSyncForDebug: isSet(object.disableSyncForDebug) ? Boolean(object.disableSyncForDebug) : false,
      startBlock: isSet(object.startBlock) ? BigInt(object.startBlock.toString()) : BigInt(0),
      pauseAtBlock: isSet(object.pauseAtBlock) ? BigInt(object.pauseAtBlock.toString()) : BigInt(0),
      pruner: isSet(object.pruner) ? PrunerConfig.fromJSON(object.pruner) : undefined,
      pauseAtUpgradePlanBlockHeight: isSet(object.pauseAtUpgradePlanBlockHeight) ? BigInt(object.pauseAtUpgradePlanBlockHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: IndexerConfig): unknown {
    const obj: any = {};
    message.disable !== undefined && (obj.disable = message.disable);
    message.disableSyncForDebug !== undefined && (obj.disableSyncForDebug = message.disableSyncForDebug);
    message.startBlock !== undefined && (obj.startBlock = (message.startBlock || BigInt(0)).toString());
    message.pauseAtBlock !== undefined && (obj.pauseAtBlock = (message.pauseAtBlock || BigInt(0)).toString());
    message.pruner !== undefined && (obj.pruner = message.pruner ? PrunerConfig.toJSON(message.pruner) : undefined);
    message.pauseAtUpgradePlanBlockHeight !== undefined && (obj.pauseAtUpgradePlanBlockHeight = (message.pauseAtUpgradePlanBlockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<IndexerConfig>): IndexerConfig {
    const message = createBaseIndexerConfig();
    message.disable = object.disable ?? false;
    message.disableSyncForDebug = object.disableSyncForDebug ?? false;
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.pauseAtBlock = object.pauseAtBlock !== undefined && object.pauseAtBlock !== null ? BigInt(object.pauseAtBlock.toString()) : BigInt(0);
    message.pruner = object.pruner !== undefined && object.pruner !== null ? PrunerConfig.fromPartial(object.pruner) : undefined;
    message.pauseAtUpgradePlanBlockHeight = object.pauseAtUpgradePlanBlockHeight !== undefined && object.pauseAtUpgradePlanBlockHeight !== null ? BigInt(object.pauseAtUpgradePlanBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IndexerConfigAmino): IndexerConfig {
    const message = createBaseIndexerConfig();
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = object.disable;
    }
    if (object.disable_sync_for_debug !== undefined && object.disable_sync_for_debug !== null) {
      message.disableSyncForDebug = object.disable_sync_for_debug;
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.pause_at_block !== undefined && object.pause_at_block !== null) {
      message.pauseAtBlock = BigInt(object.pause_at_block);
    }
    if (object.pruner !== undefined && object.pruner !== null) {
      message.pruner = PrunerConfig.fromAmino(object.pruner);
    }
    if (object.pause_at_upgrade_plan_block_height !== undefined && object.pause_at_upgrade_plan_block_height !== null) {
      message.pauseAtUpgradePlanBlockHeight = BigInt(object.pause_at_upgrade_plan_block_height);
    }
    return message;
  },
  toAmino(message: IndexerConfig, useInterfaces: boolean = true): IndexerConfigAmino {
    const obj: any = {};
    obj.disable = message.disable === false ? undefined : message.disable;
    obj.disable_sync_for_debug = message.disableSyncForDebug === false ? undefined : message.disableSyncForDebug;
    obj.start_block = message.startBlock ? message.startBlock.toString() : undefined;
    obj.pause_at_block = message.pauseAtBlock ? message.pauseAtBlock.toString() : undefined;
    obj.pruner = message.pruner ? PrunerConfig.toAmino(message.pruner, useInterfaces) : undefined;
    obj.pause_at_upgrade_plan_block_height = message.pauseAtUpgradePlanBlockHeight ? message.pauseAtUpgradePlanBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IndexerConfigAminoMsg): IndexerConfig {
    return IndexerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerConfigProtoMsg, useInterfaces: boolean = true): IndexerConfig {
    return IndexerConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: IndexerConfig): Uint8Array {
    return IndexerConfig.encode(message).finish();
  },
  toProtoMsg(message: IndexerConfig): IndexerConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.IndexerConfig",
      value: IndexerConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IndexerConfig.typeUrl, IndexerConfig);
function createBasePrunerConfig(): PrunerConfig {
  return {
    pruneBlock: 0,
    pruneIntervalBlocks: 0,
    keepBlocks: 0
  };
}
export const PrunerConfig = {
  typeUrl: "/pryzmatics.server.common.PrunerConfig",
  is(o: any): o is PrunerConfig {
    return o && (o.$typeUrl === PrunerConfig.typeUrl || typeof o.pruneBlock === "number" && typeof o.pruneIntervalBlocks === "number" && typeof o.keepBlocks === "number");
  },
  isSDK(o: any): o is PrunerConfigSDKType {
    return o && (o.$typeUrl === PrunerConfig.typeUrl || typeof o.prune_block === "number" && typeof o.prune_interval_blocks === "number" && typeof o.keep_blocks === "number");
  },
  isAmino(o: any): o is PrunerConfigAmino {
    return o && (o.$typeUrl === PrunerConfig.typeUrl || typeof o.prune_block === "number" && typeof o.prune_interval_blocks === "number" && typeof o.keep_blocks === "number");
  },
  encode(message: PrunerConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruneBlock !== 0) {
      writer.uint32(8).uint32(message.pruneBlock);
    }
    if (message.pruneIntervalBlocks !== 0) {
      writer.uint32(16).uint32(message.pruneIntervalBlocks);
    }
    if (message.keepBlocks !== 0) {
      writer.uint32(24).uint32(message.keepBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PrunerConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrunerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruneBlock = reader.uint32();
          break;
        case 2:
          message.pruneIntervalBlocks = reader.uint32();
          break;
        case 3:
          message.keepBlocks = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PrunerConfig {
    return {
      pruneBlock: isSet(object.pruneBlock) ? Number(object.pruneBlock) : 0,
      pruneIntervalBlocks: isSet(object.pruneIntervalBlocks) ? Number(object.pruneIntervalBlocks) : 0,
      keepBlocks: isSet(object.keepBlocks) ? Number(object.keepBlocks) : 0
    };
  },
  toJSON(message: PrunerConfig): unknown {
    const obj: any = {};
    message.pruneBlock !== undefined && (obj.pruneBlock = Math.round(message.pruneBlock));
    message.pruneIntervalBlocks !== undefined && (obj.pruneIntervalBlocks = Math.round(message.pruneIntervalBlocks));
    message.keepBlocks !== undefined && (obj.keepBlocks = Math.round(message.keepBlocks));
    return obj;
  },
  fromPartial(object: Partial<PrunerConfig>): PrunerConfig {
    const message = createBasePrunerConfig();
    message.pruneBlock = object.pruneBlock ?? 0;
    message.pruneIntervalBlocks = object.pruneIntervalBlocks ?? 0;
    message.keepBlocks = object.keepBlocks ?? 0;
    return message;
  },
  fromAmino(object: PrunerConfigAmino): PrunerConfig {
    const message = createBasePrunerConfig();
    if (object.prune_block !== undefined && object.prune_block !== null) {
      message.pruneBlock = object.prune_block;
    }
    if (object.prune_interval_blocks !== undefined && object.prune_interval_blocks !== null) {
      message.pruneIntervalBlocks = object.prune_interval_blocks;
    }
    if (object.keep_blocks !== undefined && object.keep_blocks !== null) {
      message.keepBlocks = object.keep_blocks;
    }
    return message;
  },
  toAmino(message: PrunerConfig, useInterfaces: boolean = true): PrunerConfigAmino {
    const obj: any = {};
    obj.prune_block = message.pruneBlock === 0 ? undefined : message.pruneBlock;
    obj.prune_interval_blocks = message.pruneIntervalBlocks === 0 ? undefined : message.pruneIntervalBlocks;
    obj.keep_blocks = message.keepBlocks === 0 ? undefined : message.keepBlocks;
    return obj;
  },
  fromAminoMsg(object: PrunerConfigAminoMsg): PrunerConfig {
    return PrunerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: PrunerConfigProtoMsg, useInterfaces: boolean = true): PrunerConfig {
    return PrunerConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PrunerConfig): Uint8Array {
    return PrunerConfig.encode(message).finish();
  },
  toProtoMsg(message: PrunerConfig): PrunerConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.PrunerConfig",
      value: PrunerConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PrunerConfig.typeUrl, PrunerConfig);
function createBaseProfilerConfig(): ProfilerConfig {
  return {
    cpuEnabled: false,
    memoryEnabled: false,
    dir: "",
    stopAfterBlocks: 0,
    stopAfterSeconds: 0
  };
}
export const ProfilerConfig = {
  typeUrl: "/pryzmatics.server.common.ProfilerConfig",
  is(o: any): o is ProfilerConfig {
    return o && (o.$typeUrl === ProfilerConfig.typeUrl || typeof o.cpuEnabled === "boolean" && typeof o.memoryEnabled === "boolean" && typeof o.dir === "string" && typeof o.stopAfterBlocks === "number" && typeof o.stopAfterSeconds === "number");
  },
  isSDK(o: any): o is ProfilerConfigSDKType {
    return o && (o.$typeUrl === ProfilerConfig.typeUrl || typeof o.cpu_enabled === "boolean" && typeof o.memory_enabled === "boolean" && typeof o.dir === "string" && typeof o.stop_after_blocks === "number" && typeof o.stop_after_seconds === "number");
  },
  isAmino(o: any): o is ProfilerConfigAmino {
    return o && (o.$typeUrl === ProfilerConfig.typeUrl || typeof o.cpu_enabled === "boolean" && typeof o.memory_enabled === "boolean" && typeof o.dir === "string" && typeof o.stop_after_blocks === "number" && typeof o.stop_after_seconds === "number");
  },
  encode(message: ProfilerConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpuEnabled === true) {
      writer.uint32(8).bool(message.cpuEnabled);
    }
    if (message.memoryEnabled === true) {
      writer.uint32(16).bool(message.memoryEnabled);
    }
    if (message.dir !== "") {
      writer.uint32(26).string(message.dir);
    }
    if (message.stopAfterBlocks !== 0) {
      writer.uint32(32).uint32(message.stopAfterBlocks);
    }
    if (message.stopAfterSeconds !== 0) {
      writer.uint32(40).uint32(message.stopAfterSeconds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProfilerConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfilerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpuEnabled = reader.bool();
          break;
        case 2:
          message.memoryEnabled = reader.bool();
          break;
        case 3:
          message.dir = reader.string();
          break;
        case 4:
          message.stopAfterBlocks = reader.uint32();
          break;
        case 5:
          message.stopAfterSeconds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProfilerConfig {
    return {
      cpuEnabled: isSet(object.cpuEnabled) ? Boolean(object.cpuEnabled) : false,
      memoryEnabled: isSet(object.memoryEnabled) ? Boolean(object.memoryEnabled) : false,
      dir: isSet(object.dir) ? String(object.dir) : "",
      stopAfterBlocks: isSet(object.stopAfterBlocks) ? Number(object.stopAfterBlocks) : 0,
      stopAfterSeconds: isSet(object.stopAfterSeconds) ? Number(object.stopAfterSeconds) : 0
    };
  },
  toJSON(message: ProfilerConfig): unknown {
    const obj: any = {};
    message.cpuEnabled !== undefined && (obj.cpuEnabled = message.cpuEnabled);
    message.memoryEnabled !== undefined && (obj.memoryEnabled = message.memoryEnabled);
    message.dir !== undefined && (obj.dir = message.dir);
    message.stopAfterBlocks !== undefined && (obj.stopAfterBlocks = Math.round(message.stopAfterBlocks));
    message.stopAfterSeconds !== undefined && (obj.stopAfterSeconds = Math.round(message.stopAfterSeconds));
    return obj;
  },
  fromPartial(object: Partial<ProfilerConfig>): ProfilerConfig {
    const message = createBaseProfilerConfig();
    message.cpuEnabled = object.cpuEnabled ?? false;
    message.memoryEnabled = object.memoryEnabled ?? false;
    message.dir = object.dir ?? "";
    message.stopAfterBlocks = object.stopAfterBlocks ?? 0;
    message.stopAfterSeconds = object.stopAfterSeconds ?? 0;
    return message;
  },
  fromAmino(object: ProfilerConfigAmino): ProfilerConfig {
    const message = createBaseProfilerConfig();
    if (object.cpu_enabled !== undefined && object.cpu_enabled !== null) {
      message.cpuEnabled = object.cpu_enabled;
    }
    if (object.memory_enabled !== undefined && object.memory_enabled !== null) {
      message.memoryEnabled = object.memory_enabled;
    }
    if (object.dir !== undefined && object.dir !== null) {
      message.dir = object.dir;
    }
    if (object.stop_after_blocks !== undefined && object.stop_after_blocks !== null) {
      message.stopAfterBlocks = object.stop_after_blocks;
    }
    if (object.stop_after_seconds !== undefined && object.stop_after_seconds !== null) {
      message.stopAfterSeconds = object.stop_after_seconds;
    }
    return message;
  },
  toAmino(message: ProfilerConfig, useInterfaces: boolean = true): ProfilerConfigAmino {
    const obj: any = {};
    obj.cpu_enabled = message.cpuEnabled === false ? undefined : message.cpuEnabled;
    obj.memory_enabled = message.memoryEnabled === false ? undefined : message.memoryEnabled;
    obj.dir = message.dir === "" ? undefined : message.dir;
    obj.stop_after_blocks = message.stopAfterBlocks === 0 ? undefined : message.stopAfterBlocks;
    obj.stop_after_seconds = message.stopAfterSeconds === 0 ? undefined : message.stopAfterSeconds;
    return obj;
  },
  fromAminoMsg(object: ProfilerConfigAminoMsg): ProfilerConfig {
    return ProfilerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ProfilerConfigProtoMsg, useInterfaces: boolean = true): ProfilerConfig {
    return ProfilerConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProfilerConfig): Uint8Array {
    return ProfilerConfig.encode(message).finish();
  },
  toProtoMsg(message: ProfilerConfig): ProfilerConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.ProfilerConfig",
      value: ProfilerConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProfilerConfig.typeUrl, ProfilerConfig);
function createBaseYieldReturnConfig(): YieldReturnConfig {
  return {
    timeWindowDays: 0,
    calculationIntervalBlocks: 0
  };
}
export const YieldReturnConfig = {
  typeUrl: "/pryzmatics.server.common.YieldReturnConfig",
  is(o: any): o is YieldReturnConfig {
    return o && (o.$typeUrl === YieldReturnConfig.typeUrl || typeof o.timeWindowDays === "number" && typeof o.calculationIntervalBlocks === "number");
  },
  isSDK(o: any): o is YieldReturnConfigSDKType {
    return o && (o.$typeUrl === YieldReturnConfig.typeUrl || typeof o.time_window_days === "number" && typeof o.calculation_interval_blocks === "number");
  },
  isAmino(o: any): o is YieldReturnConfigAmino {
    return o && (o.$typeUrl === YieldReturnConfig.typeUrl || typeof o.time_window_days === "number" && typeof o.calculation_interval_blocks === "number");
  },
  encode(message: YieldReturnConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeWindowDays !== 0) {
      writer.uint32(8).uint32(message.timeWindowDays);
    }
    if (message.calculationIntervalBlocks !== 0) {
      writer.uint32(16).uint32(message.calculationIntervalBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): YieldReturnConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYieldReturnConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeWindowDays = reader.uint32();
          break;
        case 2:
          message.calculationIntervalBlocks = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): YieldReturnConfig {
    return {
      timeWindowDays: isSet(object.timeWindowDays) ? Number(object.timeWindowDays) : 0,
      calculationIntervalBlocks: isSet(object.calculationIntervalBlocks) ? Number(object.calculationIntervalBlocks) : 0
    };
  },
  toJSON(message: YieldReturnConfig): unknown {
    const obj: any = {};
    message.timeWindowDays !== undefined && (obj.timeWindowDays = Math.round(message.timeWindowDays));
    message.calculationIntervalBlocks !== undefined && (obj.calculationIntervalBlocks = Math.round(message.calculationIntervalBlocks));
    return obj;
  },
  fromPartial(object: Partial<YieldReturnConfig>): YieldReturnConfig {
    const message = createBaseYieldReturnConfig();
    message.timeWindowDays = object.timeWindowDays ?? 0;
    message.calculationIntervalBlocks = object.calculationIntervalBlocks ?? 0;
    return message;
  },
  fromAmino(object: YieldReturnConfigAmino): YieldReturnConfig {
    const message = createBaseYieldReturnConfig();
    if (object.time_window_days !== undefined && object.time_window_days !== null) {
      message.timeWindowDays = object.time_window_days;
    }
    if (object.calculation_interval_blocks !== undefined && object.calculation_interval_blocks !== null) {
      message.calculationIntervalBlocks = object.calculation_interval_blocks;
    }
    return message;
  },
  toAmino(message: YieldReturnConfig, useInterfaces: boolean = true): YieldReturnConfigAmino {
    const obj: any = {};
    obj.time_window_days = message.timeWindowDays === 0 ? undefined : message.timeWindowDays;
    obj.calculation_interval_blocks = message.calculationIntervalBlocks === 0 ? undefined : message.calculationIntervalBlocks;
    return obj;
  },
  fromAminoMsg(object: YieldReturnConfigAminoMsg): YieldReturnConfig {
    return YieldReturnConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: YieldReturnConfigProtoMsg, useInterfaces: boolean = true): YieldReturnConfig {
    return YieldReturnConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: YieldReturnConfig): Uint8Array {
    return YieldReturnConfig.encode(message).finish();
  },
  toProtoMsg(message: YieldReturnConfig): YieldReturnConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.YieldReturnConfig",
      value: YieldReturnConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(YieldReturnConfig.typeUrl, YieldReturnConfig);
function createBaseFaucetConfig(): FaucetConfig {
  return {
    chain: FaucetChainConfig.fromPartial({}),
    captcha: FaucetCaptchaConfig.fromPartial({})
  };
}
export const FaucetConfig = {
  typeUrl: "/pryzmatics.server.common.FaucetConfig",
  is(o: any): o is FaucetConfig {
    return o && (o.$typeUrl === FaucetConfig.typeUrl || FaucetChainConfig.is(o.chain) && FaucetCaptchaConfig.is(o.captcha));
  },
  isSDK(o: any): o is FaucetConfigSDKType {
    return o && (o.$typeUrl === FaucetConfig.typeUrl || FaucetChainConfig.isSDK(o.chain) && FaucetCaptchaConfig.isSDK(o.captcha));
  },
  isAmino(o: any): o is FaucetConfigAmino {
    return o && (o.$typeUrl === FaucetConfig.typeUrl || FaucetChainConfig.isAmino(o.chain) && FaucetCaptchaConfig.isAmino(o.captcha));
  },
  encode(message: FaucetConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== undefined) {
      FaucetChainConfig.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    if (message.captcha !== undefined) {
      FaucetCaptchaConfig.encode(message.captcha, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FaucetConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaucetConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = FaucetChainConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.captcha = FaucetCaptchaConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FaucetConfig {
    return {
      chain: isSet(object.chain) ? FaucetChainConfig.fromJSON(object.chain) : undefined,
      captcha: isSet(object.captcha) ? FaucetCaptchaConfig.fromJSON(object.captcha) : undefined
    };
  },
  toJSON(message: FaucetConfig): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain ? FaucetChainConfig.toJSON(message.chain) : undefined);
    message.captcha !== undefined && (obj.captcha = message.captcha ? FaucetCaptchaConfig.toJSON(message.captcha) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FaucetConfig>): FaucetConfig {
    const message = createBaseFaucetConfig();
    message.chain = object.chain !== undefined && object.chain !== null ? FaucetChainConfig.fromPartial(object.chain) : undefined;
    message.captcha = object.captcha !== undefined && object.captcha !== null ? FaucetCaptchaConfig.fromPartial(object.captcha) : undefined;
    return message;
  },
  fromAmino(object: FaucetConfigAmino): FaucetConfig {
    const message = createBaseFaucetConfig();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = FaucetChainConfig.fromAmino(object.chain);
    }
    if (object.captcha !== undefined && object.captcha !== null) {
      message.captcha = FaucetCaptchaConfig.fromAmino(object.captcha);
    }
    return message;
  },
  toAmino(message: FaucetConfig, useInterfaces: boolean = true): FaucetConfigAmino {
    const obj: any = {};
    obj.chain = message.chain ? FaucetChainConfig.toAmino(message.chain, useInterfaces) : undefined;
    obj.captcha = message.captcha ? FaucetCaptchaConfig.toAmino(message.captcha, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: FaucetConfigAminoMsg): FaucetConfig {
    return FaucetConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: FaucetConfigProtoMsg, useInterfaces: boolean = true): FaucetConfig {
    return FaucetConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FaucetConfig): Uint8Array {
    return FaucetConfig.encode(message).finish();
  },
  toProtoMsg(message: FaucetConfig): FaucetConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.FaucetConfig",
      value: FaucetConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FaucetConfig.typeUrl, FaucetConfig);
function createBaseFaucetChainConfig(): FaucetChainConfig {
  return {
    id: "",
    accPrefix: "",
    txFeeDenom: "",
    txFeeAmount: BigInt(0),
    txGasLimit: BigInt(0)
  };
}
export const FaucetChainConfig = {
  typeUrl: "/pryzmatics.server.common.FaucetChainConfig",
  is(o: any): o is FaucetChainConfig {
    return o && (o.$typeUrl === FaucetChainConfig.typeUrl || typeof o.id === "string" && typeof o.accPrefix === "string" && typeof o.txFeeDenom === "string" && typeof o.txFeeAmount === "bigint" && typeof o.txGasLimit === "bigint");
  },
  isSDK(o: any): o is FaucetChainConfigSDKType {
    return o && (o.$typeUrl === FaucetChainConfig.typeUrl || typeof o.id === "string" && typeof o.acc_prefix === "string" && typeof o.tx_fee_denom === "string" && typeof o.tx_fee_amount === "bigint" && typeof o.tx_gas_limit === "bigint");
  },
  isAmino(o: any): o is FaucetChainConfigAmino {
    return o && (o.$typeUrl === FaucetChainConfig.typeUrl || typeof o.id === "string" && typeof o.acc_prefix === "string" && typeof o.tx_fee_denom === "string" && typeof o.tx_fee_amount === "bigint" && typeof o.tx_gas_limit === "bigint");
  },
  encode(message: FaucetChainConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.accPrefix !== "") {
      writer.uint32(18).string(message.accPrefix);
    }
    if (message.txFeeDenom !== "") {
      writer.uint32(26).string(message.txFeeDenom);
    }
    if (message.txFeeAmount !== BigInt(0)) {
      writer.uint32(32).int64(message.txFeeAmount);
    }
    if (message.txGasLimit !== BigInt(0)) {
      writer.uint32(40).uint64(message.txGasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FaucetChainConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaucetChainConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.accPrefix = reader.string();
          break;
        case 3:
          message.txFeeDenom = reader.string();
          break;
        case 4:
          message.txFeeAmount = reader.int64();
          break;
        case 5:
          message.txGasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FaucetChainConfig {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      accPrefix: isSet(object.accPrefix) ? String(object.accPrefix) : "",
      txFeeDenom: isSet(object.txFeeDenom) ? String(object.txFeeDenom) : "",
      txFeeAmount: isSet(object.txFeeAmount) ? BigInt(object.txFeeAmount.toString()) : BigInt(0),
      txGasLimit: isSet(object.txGasLimit) ? BigInt(object.txGasLimit.toString()) : BigInt(0)
    };
  },
  toJSON(message: FaucetChainConfig): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.accPrefix !== undefined && (obj.accPrefix = message.accPrefix);
    message.txFeeDenom !== undefined && (obj.txFeeDenom = message.txFeeDenom);
    message.txFeeAmount !== undefined && (obj.txFeeAmount = (message.txFeeAmount || BigInt(0)).toString());
    message.txGasLimit !== undefined && (obj.txGasLimit = (message.txGasLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<FaucetChainConfig>): FaucetChainConfig {
    const message = createBaseFaucetChainConfig();
    message.id = object.id ?? "";
    message.accPrefix = object.accPrefix ?? "";
    message.txFeeDenom = object.txFeeDenom ?? "";
    message.txFeeAmount = object.txFeeAmount !== undefined && object.txFeeAmount !== null ? BigInt(object.txFeeAmount.toString()) : BigInt(0);
    message.txGasLimit = object.txGasLimit !== undefined && object.txGasLimit !== null ? BigInt(object.txGasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FaucetChainConfigAmino): FaucetChainConfig {
    const message = createBaseFaucetChainConfig();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.acc_prefix !== undefined && object.acc_prefix !== null) {
      message.accPrefix = object.acc_prefix;
    }
    if (object.tx_fee_denom !== undefined && object.tx_fee_denom !== null) {
      message.txFeeDenom = object.tx_fee_denom;
    }
    if (object.tx_fee_amount !== undefined && object.tx_fee_amount !== null) {
      message.txFeeAmount = BigInt(object.tx_fee_amount);
    }
    if (object.tx_gas_limit !== undefined && object.tx_gas_limit !== null) {
      message.txGasLimit = BigInt(object.tx_gas_limit);
    }
    return message;
  },
  toAmino(message: FaucetChainConfig, useInterfaces: boolean = true): FaucetChainConfigAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.acc_prefix = message.accPrefix === "" ? undefined : message.accPrefix;
    obj.tx_fee_denom = message.txFeeDenom === "" ? undefined : message.txFeeDenom;
    obj.tx_fee_amount = message.txFeeAmount ? message.txFeeAmount.toString() : undefined;
    obj.tx_gas_limit = message.txGasLimit ? message.txGasLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FaucetChainConfigAminoMsg): FaucetChainConfig {
    return FaucetChainConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: FaucetChainConfigProtoMsg, useInterfaces: boolean = true): FaucetChainConfig {
    return FaucetChainConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FaucetChainConfig): Uint8Array {
    return FaucetChainConfig.encode(message).finish();
  },
  toProtoMsg(message: FaucetChainConfig): FaucetChainConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.FaucetChainConfig",
      value: FaucetChainConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FaucetChainConfig.typeUrl, FaucetChainConfig);
function createBaseFaucetCaptchaConfig(): FaucetCaptchaConfig {
  return {
    disable: false,
    v2Hostname: [],
    v3Action: [],
    v3Hostname: [],
    v3Score: 0,
    hHostname: [],
    hScore: 0
  };
}
export const FaucetCaptchaConfig = {
  typeUrl: "/pryzmatics.server.common.FaucetCaptchaConfig",
  is(o: any): o is FaucetCaptchaConfig {
    return o && (o.$typeUrl === FaucetCaptchaConfig.typeUrl || typeof o.disable === "boolean" && Array.isArray(o.v2Hostname) && (!o.v2Hostname.length || typeof o.v2Hostname[0] === "string") && Array.isArray(o.v3Action) && (!o.v3Action.length || typeof o.v3Action[0] === "string") && Array.isArray(o.v3Hostname) && (!o.v3Hostname.length || typeof o.v3Hostname[0] === "string") && typeof o.v3Score === "number" && Array.isArray(o.hHostname) && (!o.hHostname.length || typeof o.hHostname[0] === "string") && typeof o.hScore === "number");
  },
  isSDK(o: any): o is FaucetCaptchaConfigSDKType {
    return o && (o.$typeUrl === FaucetCaptchaConfig.typeUrl || typeof o.disable === "boolean" && Array.isArray(o.v2_hostname) && (!o.v2_hostname.length || typeof o.v2_hostname[0] === "string") && Array.isArray(o.v3_action) && (!o.v3_action.length || typeof o.v3_action[0] === "string") && Array.isArray(o.v3_hostname) && (!o.v3_hostname.length || typeof o.v3_hostname[0] === "string") && typeof o.v3_score === "number" && Array.isArray(o.h_hostname) && (!o.h_hostname.length || typeof o.h_hostname[0] === "string") && typeof o.h_score === "number");
  },
  isAmino(o: any): o is FaucetCaptchaConfigAmino {
    return o && (o.$typeUrl === FaucetCaptchaConfig.typeUrl || typeof o.disable === "boolean" && Array.isArray(o.v2_hostname) && (!o.v2_hostname.length || typeof o.v2_hostname[0] === "string") && Array.isArray(o.v3_action) && (!o.v3_action.length || typeof o.v3_action[0] === "string") && Array.isArray(o.v3_hostname) && (!o.v3_hostname.length || typeof o.v3_hostname[0] === "string") && typeof o.v3_score === "number" && Array.isArray(o.h_hostname) && (!o.h_hostname.length || typeof o.h_hostname[0] === "string") && typeof o.h_score === "number");
  },
  encode(message: FaucetCaptchaConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.disable === true) {
      writer.uint32(8).bool(message.disable);
    }
    for (const v of message.v2Hostname) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.v3Action) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.v3Hostname) {
      writer.uint32(34).string(v!);
    }
    if (message.v3Score !== 0) {
      writer.uint32(41).double(message.v3Score);
    }
    for (const v of message.hHostname) {
      writer.uint32(50).string(v!);
    }
    if (message.hScore !== 0) {
      writer.uint32(57).double(message.hScore);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FaucetCaptchaConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaucetCaptchaConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disable = reader.bool();
          break;
        case 2:
          message.v2Hostname.push(reader.string());
          break;
        case 3:
          message.v3Action.push(reader.string());
          break;
        case 4:
          message.v3Hostname.push(reader.string());
          break;
        case 5:
          message.v3Score = reader.double();
          break;
        case 6:
          message.hHostname.push(reader.string());
          break;
        case 7:
          message.hScore = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FaucetCaptchaConfig {
    return {
      disable: isSet(object.disable) ? Boolean(object.disable) : false,
      v2Hostname: Array.isArray(object?.v2Hostname) ? object.v2Hostname.map((e: any) => String(e)) : [],
      v3Action: Array.isArray(object?.v3Action) ? object.v3Action.map((e: any) => String(e)) : [],
      v3Hostname: Array.isArray(object?.v3Hostname) ? object.v3Hostname.map((e: any) => String(e)) : [],
      v3Score: isSet(object.v3Score) ? Number(object.v3Score) : 0,
      hHostname: Array.isArray(object?.hHostname) ? object.hHostname.map((e: any) => String(e)) : [],
      hScore: isSet(object.hScore) ? Number(object.hScore) : 0
    };
  },
  toJSON(message: FaucetCaptchaConfig): unknown {
    const obj: any = {};
    message.disable !== undefined && (obj.disable = message.disable);
    if (message.v2Hostname) {
      obj.v2Hostname = message.v2Hostname.map(e => e);
    } else {
      obj.v2Hostname = [];
    }
    if (message.v3Action) {
      obj.v3Action = message.v3Action.map(e => e);
    } else {
      obj.v3Action = [];
    }
    if (message.v3Hostname) {
      obj.v3Hostname = message.v3Hostname.map(e => e);
    } else {
      obj.v3Hostname = [];
    }
    message.v3Score !== undefined && (obj.v3Score = message.v3Score);
    if (message.hHostname) {
      obj.hHostname = message.hHostname.map(e => e);
    } else {
      obj.hHostname = [];
    }
    message.hScore !== undefined && (obj.hScore = message.hScore);
    return obj;
  },
  fromPartial(object: Partial<FaucetCaptchaConfig>): FaucetCaptchaConfig {
    const message = createBaseFaucetCaptchaConfig();
    message.disable = object.disable ?? false;
    message.v2Hostname = object.v2Hostname?.map(e => e) || [];
    message.v3Action = object.v3Action?.map(e => e) || [];
    message.v3Hostname = object.v3Hostname?.map(e => e) || [];
    message.v3Score = object.v3Score ?? 0;
    message.hHostname = object.hHostname?.map(e => e) || [];
    message.hScore = object.hScore ?? 0;
    return message;
  },
  fromAmino(object: FaucetCaptchaConfigAmino): FaucetCaptchaConfig {
    const message = createBaseFaucetCaptchaConfig();
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = object.disable;
    }
    message.v2Hostname = object.v2_hostname?.map(e => e) || [];
    message.v3Action = object.v3_action?.map(e => e) || [];
    message.v3Hostname = object.v3_hostname?.map(e => e) || [];
    if (object.v3_score !== undefined && object.v3_score !== null) {
      message.v3Score = object.v3_score;
    }
    message.hHostname = object.h_hostname?.map(e => e) || [];
    if (object.h_score !== undefined && object.h_score !== null) {
      message.hScore = object.h_score;
    }
    return message;
  },
  toAmino(message: FaucetCaptchaConfig, useInterfaces: boolean = true): FaucetCaptchaConfigAmino {
    const obj: any = {};
    obj.disable = message.disable === false ? undefined : message.disable;
    if (message.v2Hostname) {
      obj.v2_hostname = message.v2Hostname.map(e => e);
    } else {
      obj.v2_hostname = message.v2Hostname;
    }
    if (message.v3Action) {
      obj.v3_action = message.v3Action.map(e => e);
    } else {
      obj.v3_action = message.v3Action;
    }
    if (message.v3Hostname) {
      obj.v3_hostname = message.v3Hostname.map(e => e);
    } else {
      obj.v3_hostname = message.v3Hostname;
    }
    obj.v3_score = message.v3Score === 0 ? undefined : message.v3Score;
    if (message.hHostname) {
      obj.h_hostname = message.hHostname.map(e => e);
    } else {
      obj.h_hostname = message.hHostname;
    }
    obj.h_score = message.hScore === 0 ? undefined : message.hScore;
    return obj;
  },
  fromAminoMsg(object: FaucetCaptchaConfigAminoMsg): FaucetCaptchaConfig {
    return FaucetCaptchaConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: FaucetCaptchaConfigProtoMsg, useInterfaces: boolean = true): FaucetCaptchaConfig {
    return FaucetCaptchaConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FaucetCaptchaConfig): Uint8Array {
    return FaucetCaptchaConfig.encode(message).finish();
  },
  toProtoMsg(message: FaucetCaptchaConfig): FaucetCaptchaConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.FaucetCaptchaConfig",
      value: FaucetCaptchaConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FaucetCaptchaConfig.typeUrl, FaucetCaptchaConfig);
function createBaseStableCoinConfig(): StableCoinConfig {
  return {
    denom: "",
    decimals: 0,
    displayName: ""
  };
}
export const StableCoinConfig = {
  typeUrl: "/pryzmatics.server.common.StableCoinConfig",
  is(o: any): o is StableCoinConfig {
    return o && (o.$typeUrl === StableCoinConfig.typeUrl || typeof o.denom === "string" && typeof o.decimals === "number" && typeof o.displayName === "string");
  },
  isSDK(o: any): o is StableCoinConfigSDKType {
    return o && (o.$typeUrl === StableCoinConfig.typeUrl || typeof o.denom === "string" && typeof o.decimals === "number" && typeof o.display_name === "string");
  },
  isAmino(o: any): o is StableCoinConfigAmino {
    return o && (o.$typeUrl === StableCoinConfig.typeUrl || typeof o.denom === "string" && typeof o.decimals === "number" && typeof o.display_name === "string");
  },
  encode(message: StableCoinConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.decimals !== 0) {
      writer.uint32(16).uint32(message.decimals);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StableCoinConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStableCoinConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.decimals = reader.uint32();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StableCoinConfig {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      displayName: isSet(object.displayName) ? String(object.displayName) : ""
    };
  },
  toJSON(message: StableCoinConfig): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },
  fromPartial(object: Partial<StableCoinConfig>): StableCoinConfig {
    const message = createBaseStableCoinConfig();
    message.denom = object.denom ?? "";
    message.decimals = object.decimals ?? 0;
    message.displayName = object.displayName ?? "";
    return message;
  },
  fromAmino(object: StableCoinConfigAmino): StableCoinConfig {
    const message = createBaseStableCoinConfig();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    return message;
  },
  toAmino(message: StableCoinConfig, useInterfaces: boolean = true): StableCoinConfigAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.decimals = message.decimals === 0 ? undefined : message.decimals;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    return obj;
  },
  fromAminoMsg(object: StableCoinConfigAminoMsg): StableCoinConfig {
    return StableCoinConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: StableCoinConfigProtoMsg, useInterfaces: boolean = true): StableCoinConfig {
    return StableCoinConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StableCoinConfig): Uint8Array {
    return StableCoinConfig.encode(message).finish();
  },
  toProtoMsg(message: StableCoinConfig): StableCoinConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.StableCoinConfig",
      value: StableCoinConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StableCoinConfig.typeUrl, StableCoinConfig);
function createBaseAssetConfig(): AssetConfig {
  return {
    underlyingTokenDenom: "",
    yieldMinDataCount: BigInt(0),
    displayName: "",
    decimals: BigInt(0)
  };
}
export const AssetConfig = {
  typeUrl: "/pryzmatics.server.common.AssetConfig",
  is(o: any): o is AssetConfig {
    return o && (o.$typeUrl === AssetConfig.typeUrl || typeof o.underlyingTokenDenom === "string" && typeof o.yieldMinDataCount === "bigint" && typeof o.displayName === "string" && typeof o.decimals === "bigint");
  },
  isSDK(o: any): o is AssetConfigSDKType {
    return o && (o.$typeUrl === AssetConfig.typeUrl || typeof o.underlyingTokenDenom === "string" && typeof o.yieldMinDataCount === "bigint" && typeof o.displayName === "string" && typeof o.decimals === "bigint");
  },
  isAmino(o: any): o is AssetConfigAmino {
    return o && (o.$typeUrl === AssetConfig.typeUrl || typeof o.underlyingTokenDenom === "string" && typeof o.yieldMinDataCount === "bigint" && typeof o.displayName === "string" && typeof o.decimals === "bigint");
  },
  encode(message: AssetConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.underlyingTokenDenom !== "") {
      writer.uint32(10).string(message.underlyingTokenDenom);
    }
    if (message.yieldMinDataCount !== BigInt(0)) {
      writer.uint32(16).int64(message.yieldMinDataCount);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(32).int64(message.decimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underlyingTokenDenom = reader.string();
          break;
        case 2:
          message.yieldMinDataCount = reader.int64();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        case 4:
          message.decimals = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetConfig {
    return {
      underlyingTokenDenom: isSet(object.underlyingTokenDenom) ? String(object.underlyingTokenDenom) : "",
      yieldMinDataCount: isSet(object.yieldMinDataCount) ? BigInt(object.yieldMinDataCount.toString()) : BigInt(0),
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0)
    };
  },
  toJSON(message: AssetConfig): unknown {
    const obj: any = {};
    message.underlyingTokenDenom !== undefined && (obj.underlyingTokenDenom = message.underlyingTokenDenom);
    message.yieldMinDataCount !== undefined && (obj.yieldMinDataCount = (message.yieldMinDataCount || BigInt(0)).toString());
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.decimals !== undefined && (obj.decimals = (message.decimals || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<AssetConfig>): AssetConfig {
    const message = createBaseAssetConfig();
    message.underlyingTokenDenom = object.underlyingTokenDenom ?? "";
    message.yieldMinDataCount = object.yieldMinDataCount !== undefined && object.yieldMinDataCount !== null ? BigInt(object.yieldMinDataCount.toString()) : BigInt(0);
    message.displayName = object.displayName ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AssetConfigAmino): AssetConfig {
    const message = createBaseAssetConfig();
    if (object.underlyingTokenDenom !== undefined && object.underlyingTokenDenom !== null) {
      message.underlyingTokenDenom = object.underlyingTokenDenom;
    }
    if (object.yieldMinDataCount !== undefined && object.yieldMinDataCount !== null) {
      message.yieldMinDataCount = BigInt(object.yieldMinDataCount);
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    return message;
  },
  toAmino(message: AssetConfig, useInterfaces: boolean = true): AssetConfigAmino {
    const obj: any = {};
    obj.underlyingTokenDenom = message.underlyingTokenDenom === "" ? undefined : message.underlyingTokenDenom;
    obj.yieldMinDataCount = message.yieldMinDataCount ? message.yieldMinDataCount.toString() : undefined;
    obj.displayName = message.displayName === "" ? undefined : message.displayName;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetConfigAminoMsg): AssetConfig {
    return AssetConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetConfigProtoMsg, useInterfaces: boolean = true): AssetConfig {
    return AssetConfig.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetConfig): Uint8Array {
    return AssetConfig.encode(message).finish();
  },
  toProtoMsg(message: AssetConfig): AssetConfigProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.AssetConfig",
      value: AssetConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetConfig.typeUrl, AssetConfig);