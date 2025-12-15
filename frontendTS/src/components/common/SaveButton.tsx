import toast from "react-hot-toast";
import useOnlineStatus from "../../customHooks/useOnlineStatus";

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    toast.success("Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? toast.success("Save progress") : toast.loading("Reconnecting")}
    </button>
  );
}
export default SaveButton;