import { DropdownTextInfoTypes } from "../../types/Dropdown/DropdownTextInfo";
import { ItemText, DropdownTextInfoContainer } from "./DropdownStyle";

const DropdownTextInfo = ({ item, searchControl }: DropdownTextInfoTypes) => {
  const baseText = item?.name?.toLowerCase();
  const targetText = searchControl?.filter?.toLowerCase();
  const startIndex = targetText ? baseText.indexOf(targetText) : -1;
  const endIndex = targetText
    ? baseText.lastIndexOf(targetText) + targetText.length - 1
    : -1;

  const beforeText = baseText.substring(0, startIndex);
  const highlightedText = baseText.substring(startIndex, endIndex + 1);
  const afterText = baseText.substring(endIndex + 1);

  return (
    <DropdownTextInfoContainer>
      {startIndex === -1 || endIndex === -1 ? (
        <ItemText>{item?.name}</ItemText>
      ) : (
        <ItemText>
          {beforeText}
          <strong>{highlightedText}</strong>
          {afterText}
        </ItemText>
      )}
      <ItemText>{item?.episode?.length} Episodes</ItemText>
    </DropdownTextInfoContainer>
  );
};

export default DropdownTextInfo;
