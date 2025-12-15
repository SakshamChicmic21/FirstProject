import useOnlineStatus from "../../customHooks/useOnlineStatus";
import NetworkStatus from "./NetworkStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();
  // return isOnline ? toast.success("Online") :toast.error("Disconnected");
  return !isOnline && <NetworkStatus/>;
}
export default StatusBar;