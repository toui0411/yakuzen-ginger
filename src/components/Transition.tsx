import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

import { ReactChild } from "react"

type TransitionKind<RC> = {
  children: RC
  location: string
}

const TIMEOUT: number = 200

const getTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
} as any

const Transition: React.FC<TransitionKind<ReactChild>> = ({
  children,
  location,
}) => {
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: 0,
          exit: 0,
        }}
      >
        {(status:keyof typeof getTransitionStyles) => (
          <div
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
export default Transition