import { SetupNetworkResult } from "./setupNetwork";

export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({
  components,
}: SetupNetworkResult): any {
  return {
    ...components,
    // add your client components or overrides here
  };
}
