import "./ExtendVision.css"
//check the root of files


export const OrderCard = ({title,paragraph,btn})=> {
  return (
    <>
      <section>
        <div className="container-fluid main-extend ">
          <div className="extend-vision col-11">
          <img
            decoding="async"
            loading="lazy"
            sizes="max(100vw - 96px, 1px)"
            srcSet="
                https://framerusercontent.com/images/Fo4j7vhs11cr34tg7eYbSRwafc.png?scale-down-to=512 512w,
                https://framerusercontent.com/images/Fo4j7vhs11cr34tg7eYbSRwafc.png?scale-down-to=1024 1024w,
                https://framerusercontent.com/images/Fo4j7vhs11cr34tg7eYbSRwafc.png?scale-down-to=2048 2048w,
                https://framerusercontent.com/images/Fo4j7vhs11cr34tg7eYbSRwafc.png 4096w
              "
            src="https://framerusercontent.com/images/Fo4j7vhs11cr34tg7eYbSRwafc.png"
            alt=""
            style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' ,position:"absolute",zIndex:"-1"}}
          />

            <h3>{title}</h3>
            <h6>{paragraph}</h6>
            <button class="btn btn-primary" type="submit">{btn}</button>

          </div>
        </div>
    </section>
    </>
  )
}

function ExtendVision() {
  <OrderCard title=" Start your Extended Vision  journey" paragraph=" Join the tech giants and dive into the world of spatial computing." btn="Order Now"/>




}


export default ExtendVision