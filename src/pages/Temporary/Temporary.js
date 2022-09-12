import React from 'react'
import styles from './Temporary.module.css'
import {connect} from 'react-redux'
import logo1 from "../../assets/img/logo1.png";
import phone from "../../assets/img/phone.svg";
import whatsapp from "../../assets/img/whatsapp.svg";

const Temporary = () => {
  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.image} style={{backgroundImage: `url(${logo1})`}}/>
          <div className={styles.text}>
            <div className={styles.title}>
              Сайт на реконструкции
            </div>
            <div className={styles.subtitle}>
              Наши контакты:
            </div>
            <div className={styles.contact}>
              <img src={phone} alt=""/>
              <div>
                <a href="tel:+74991300275">+7 (499) 1300 275</a>
                <a href="tel:+79295073560">+7 (929) 507 35 60</a>
              </div>
            </div>
            <div className={styles.contact}>
              <img src={whatsapp} alt=""/>
              <div>
                <a href="https://tap.link/@newwavecasual">@newwavecasual</a>
              </div>

            </div>

          </div>

          <div className={styles.mobile_text}>
            <div className={styles.text_wrapper}>
              <div className={styles.title}>
                Сайт на реконструкции
              </div>
              <div className={styles.subtitle}>
                Наши контакты:
              </div>
              <div className={styles.contact}>
                <img src={phone} alt=""/>
                <div>
                  <a href="tel:+74991300275">+7 (499) 1300 275</a>
                  <a href="tel:+79295073560">+7 (929) 507 35 60</a>
                </div>
              </div>
              <div className={styles.contact}>
                <img src={whatsapp} alt=""/>
                <div>
                  <a href="https://tap.link/@newwavecasual">@newwavecasual</a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Temporary)