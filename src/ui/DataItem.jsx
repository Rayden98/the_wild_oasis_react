import PropTypes from "prop-types"; // Import PropTypes
import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

// Add prop type validation for children
DataItem.propTypes = {
  icon: PropTypes.element.isRequired, // icon should be a React element and is required
  label: PropTypes.string.isRequired, // label should be a string and is required
  children: PropTypes.node, // children can be any renderable React node
};

export default DataItem;
