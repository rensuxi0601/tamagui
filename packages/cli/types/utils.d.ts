import type { TamaguiOptions, TamaguiProjectInfo } from '@tamagui/static';
import { CLIResolvedOptions, CLIUserOptions } from '@tamagui/types';
export declare function getOptions({ root, tsconfigPath, tamaguiOptions, host, debug, }?: Partial<CLIUserOptions>): Promise<CLIResolvedOptions>;
export declare function ensure(condition: boolean, message: string): void;
export declare const loadTamagui: (opts: Partial<TamaguiOptions>) => Promise<TamaguiProjectInfo>;
export declare function registerDispose(cb: () => void): void;
export declare function disposeAll(): void;
//# sourceMappingURL=utils.d.ts.map