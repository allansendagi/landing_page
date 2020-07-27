import styled from 'styled-components';


const FocusVisible = styled.div`
&.js-focus-visible :focus:not(.focus-visible) {
   outline: none;
}
&.js-focus-visible .focus-visible {
   outline: none;
   border: 3px solid #03e9f4;
}
`;

export default FocusVisible;
