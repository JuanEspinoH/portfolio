import { forwardRef, useRef, useImperativeHandle } from 'react'
import styles from './style.module.css'
import gsap from 'gsap'

const ModalButton = forwardRef(
  ({ isModalOpen, setIsModalOpen, modalRef }, ref) => {
    const buttonModalRef = useRef(null)
    const spanRef = useRef(null)
    const nextRef = useRef(null)

    const baseWidth = 50

    function scaledValue() {
      let windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      if (windowHeight > windowWidth) {
        windowWidth = windowHeight
      }
      const toScale = windowWidth / baseWidth + 10
      return Math.ceil(toScale)
    }

    const openModal = () => {
      const tl = gsap.timeline({
        onComplete: () => setIsModalOpen(true),
      })
      tl.to(spanRef.current, { opacity: 0, duration: 0.25 })
        .to(buttonModalRef.current, { width: baseWidth })
        .to(nextRef.current, { scale: scaledValue() })
        .to(modalRef.current, { autoAlpha: 1 })
      if (typeof onOpen === 'function') onOpen()
    }
    const closeModal = () => {
      const tl = gsap.timeline({
        onComplete: () => setIsModalOpen(false),
      })
      tl.to(modalRef.current, { autoAlpha: 0 })
        .to(nextRef.current, { scale: 1 })
        .to(buttonModalRef.current, { width: '190px' })
        .to(spanRef.current, { opacity: 1, duration: 0.25 })
    }

    useImperativeHandle(ref, () => ({
      closeModal,
    }))

    return (
      <div
        style={{
          position: 'relative',
          backgroundColor: 'coral',
          height: '50px',
        }}
      >
        <button
          style={{
            fontSize: '40%',
            padding: 0,
            border: 'none',
            background: 'red',
            cursor: 'pointer',
            outline: 'none',
          }}
          onClick={() => {
            openModal()
            if (typeof onClick === 'function') onClick()
          }}
          className={styles.open_modal}
          ref={buttonModalRef}
        >
          <span className={styles.span} ref={spanRef}>
            Contact Us
          </span>
        </button>
        <div
          className={styles.next}
          ref={nextRef}
          onMouseEnter={(e) => e.target.getBoundingClientRect()}
        />
      </div>
    )
  }
)

export default ModalButton
