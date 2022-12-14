import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import MetaTags from "react-meta-tags";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {getExtraElements, getFaqElements} from "../../redux/actions/goodsActions";
import TextLineBr from "../../helpers/text_line_br";

const Faq = ({
               location,
               faq,
               extra,
               getFaqElements,
               getExtraElements,
             }) => {
  const { pathname } = location;

  useEffect(() => {
    getFaqElements()
    getExtraElements()
  }, [])
  
  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | ЧаВо</title>
        <meta
          name="description"
          content="Faq of NordicWay."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Частые вопросы
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100 pl-10 pr-10 pl-lg-100 pr-lg-100">
          <div className="container">
            <div>
              <div className="contact-info-wrap mb-4">
                {faq?.map((item, index) => (
                  <div  className="mb-2" key={index}>
                    <h3>{item.title}</h3>
                    <TextLineBr text={item.text}/>
                  </div>
                ))}

                {/*<h3>Доставка по Москве</h3>*/}

                {/*<p>Если вы находитесь в Москве, то вы сможете получить купленный вами товар двумя способами:</p>*/}
                {/*<ul>*/}
                {/*  <li>- Самовывоз</li>*/}
                {/*  <li>- Доставка курьером</li>*/}
                {/*</ul>*/}
                {/*<p>В течение 12 часов после вашего заказа, с вами свяжется наш сотрудник для уточнения деталей доставки.</p>*/}
                {/*<p>Самовывоз является бесплатным. Оплата заказа происходит при получении вами товара. Забрать товар можно из нашего пункта самовывоза по адресу: г. Москва, ул. Амурская, д. 2, стр.1</p>*/}
                {/*<p>Доставка курьером осуществляется ежедневно с 10:00 до 21:00 по адресу, указанному в заказе. Стоимость доставки в пределах МКАД - 400 рублей, за пределы МКАД - 400 рублей + 10 рублей за каждый километр. Оплата товара и услуги доставки происходит при получении вами товара, кроме случаев, при которых будет осуществлятся индивидуальный заказ товара у производителя (в данном случае осуществляется 100% предоплата).</p>*/}

                {/*<h3>Доставка в регионы РФ</h3>*/}

                {/*<p>Отправка заказов по регионам России осуществляется Почтой России двумя способами на выбор:</p>*/}
                {/*<ul>*/}
                {/*  <li>- После 100% предоплаты заказа, включая стоимость доставки</li>*/}
                {/*  <li>- Наложенным платежом (оплата курьеру Почты России при получении заказа)</li>*/}
                {/*</ul>*/}

                {/*<p>Срок доставки заказа варьируется в пределах от 4 до 30 рабочих дней в зависимости от удаленности вашего города от Москвы.</p>*/}

                {/*<h3>Возврат и обмен товара</h3>*/}

                {/*<p>Весь товар, прежде чем попасть к вам проходит тщательную проверку на предмет качества в нашем магазине!</p>*/}
                {/*<p>Покупатель имеет право на обмен/возврат товара в течение 14 дней со дня получения. Обмен/возврат производится только при условии сохранения полной комплектации товара, сохранения упаковок, всех бтрок, наклеек и чеков. На товаре не должно быть следов ношения/использования.</p>*/}
                {/*<p>Для обменя/возврата товара, покупатель должен связаться с сотрудниками нашего магазина по телефонам, указанным в разделе "Контакты" и направить по электронной почте заявление в свободной форме с указанием причины обмена/возврата. В письме также должны быть указаны паспортные данные покупателя.</p>*/}
                {/*<p>Процедура возврата денежных средств за товар начинается на следующий день после возвращения товара в наш магазин.</p>*/}
                {/*<p>В случае обмена/возврата товара все расходы по пересылке покупатель берет на себя.</p>*/}

                <h4>Свяжитесь с нами:</h4>
                <p>тел.: <a href="tel:+74991300275">+7 (499) 1300 275</a></p>
                <p>Если не дозвонились: <a href="tel:+79295073560">+7 (929) 507 35 60</a></p>

                <h4>Пишите нам:</h4>
                <p>WhatsApp: <a href="https://tap.link/nordic_way">nordic_way</a></p>
                <p>e-mail: <a href="mailto:sales@nordicway.ru">sales@nordicway.ru</a></p>

                <h4>Наши партнеры:</h4>
                <p>Магазин Скретчкарт мира и постеров <a href="https://scratchmaps.ru">https://scratchmaps.ru</a></p>
                <p>Магазин свитеров из шерсти альпака MY KARELIA <a href="https://www.mykarelia.com">https://www.mykarelia.com</a></p>

              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  faq: state.goods.faq,
  extra: state.goods.extra,
})
const mapDispatchToProps = {
  getFaqElements,
  getExtraElements,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Faq)