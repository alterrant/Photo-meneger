import PreloaderStyles from './Preloader.module.css'

const Preloader = () => {
  return (
  <div className={PreloaderStyles.preloader}>
    <div className={PreloaderStyles.spinner}>
    </div>
  </div>
  )
}

export default Preloader;