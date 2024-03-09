/* eslint-disable react/prop-types */

import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

/** 1. React portal:
 * -> render a component outside parent component DOM structure while still keep the original
 *    component position in componnet tree
 *-> render a component in any place in DOM tree, but still leave component at the same React component tree
 ->  so props will still work normally (React component position still remain same but DOM ie., div elment moved to specified position only)
 *-> uses: elements stay on top of other elements ie., modal, menus, tooptips
 */

export default function Modal({ children, onClose }) {
  /** Use react portal version:
   *  select the body as parent for whatever we want to render ie., overlay
   *
   *  this is to avoid the CSS property set to hidden conflict
   */
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );

  /** Without use react portal version */
  // return (
  //   <Overlay>
  //     <StyledModal>
  //       <Button onClick={onClose}>
  //         <HiXMark />
  //       </Button>
  //       <div>{children}</div>
  //     </StyledModal>
  //   </Overlay>
  // );
}
