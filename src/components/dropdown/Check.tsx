import { CheckIcon } from "../../assets/icons/Index";
import { Checked } from "./DropdownStyle";

const Check = ({ checkedControl }: { checkedControl: boolean }) => {
  return (
    <Checked
      style={{
        border: checkedControl ? "2px solid transparent" : "2px solid #828282",
        background: checkedControl ? "#0275FF" : "white",
      }}
    >
      {checkedControl && (
        <img
          src={CheckIcon}
          style={{
            width: 13,
            height: 13,
          }}
        />
      )}
    </Checked>
  );
};

export default Check;
