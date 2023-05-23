import apiFetch from "@wordpress/api-fetch";
import useSWR, { SWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";
import { Home } from "./components/Home";
import { Products } from "./components/ProductsAndServices";
import { Endpoints, fetchPluginStatus } from "./services";

const fetcher = (path) => apiFetch({ path });

const pages = [
  { key: "/store", Page: Home },
  { key: "/store/products", Page: Products },
  { key: "/store/details", Page: Home },
];

export function NewfoldECommerce(props) {
  let {
    data,
    error,
    mutate: refreshPlugins,
  } = useSWR("woo-status", () => fetchPluginStatus("woocommerce"), {
    revalidateOnReconnect: false,
    refreshInterval: 10 * 1000,
  });
  let { data: user } = useSWRImmutable(Endpoints.BOOTSTRAP, fetcher);
  let plugins = {
    errors: error,
    ...(data ?? {}),
    refresh: refreshPlugins,
  };
  let { Page } =
    pages.find((page) => page.key === props.state.location) ?? pages[0];

  if (data === undefined) {
    return (
      <div className="yst-grid yst-place-content-center yst-h-full">
        <div className="nfd-ecommerce-loader" />
      </div>
    );
  }

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnReconnect: false,
        isPaused: () => plugins.details?.woocommerce?.status !== "active",
      }}
    >
      <Page plugins={plugins} user={user} {...props} />
    </SWRConfig>
  );
}
