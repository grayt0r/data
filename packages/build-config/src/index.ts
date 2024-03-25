import { MacrosConfig } from '@embroider/macros/src/node';

export type WarpDriveConfig = {};
export function setConfig(context: object, config: WarpDriveConfig) {
  const macros = MacrosConfig.for(context);
  const finalizedConfig = config;
  macros.setGlobalConfig(import.meta.file, 'WarpDrive', finalizedConfig);
}
