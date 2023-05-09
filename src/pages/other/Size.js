import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import MetaTags from "react-meta-tags";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Size = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>NordicWay | Размеры</title>
        <meta
          name="description"
          content="Size of NordicWay."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Таблица размеров
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100 pl-10 pr-10 pl-lg-100 pr-lg-100">
          <div className="container">
            <div>
              <div className="contact-info-wrap">

                <h3>Таблица размеров комбинезонов</h3>

                <table>

                  <tr>
                    <th>Размер:</th>
                    <th>Рост:</th>
                    <th>Российский размер:</th>
                  </tr>
                  <tr>
                    <td>XXS</td>
                    <td>150 см - 162 см</td>
                    <td>42-44</td>
                  </tr>
                  <tr>
                    <td>XS</td>
                    <td>162 см - 172 см</td>
                    <td>44-46</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>170 см - 177 см</td>
                    <td>46-48</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>176 см - 185 см</td>
                    <td>48-52</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>186 см - 195 см</td>
                    <td>50-54</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>195 см - 200 см</td>
                    <td>52-56</td>
                  </tr>
                </table>

                <h3>Таблица размеров футболок</h3>

                <table>

                  <tr>
                    <th>Размер:</th>
                    <th>Рост:</th>
                    <th>Российский размер:</th>
                  </tr>
                  <tr>
                    <td>XS</td>
                    <td>155 см - 164 см</td>
                    <td>42-44</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>164 см - 175 см</td>
                    <td>44-46</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>175 см - 180 см</td>
                    <td>46-48</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>180 см - 185 см</td>
                    <td>48-50</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>185 см - 192 см</td>
                    <td>50-52</td>
                  </tr>
                </table>
                <p>Мы рекомендуем выбирать размер, исходя из роста и российского размера одежды.</p>
                <p>Если у вас остались какие-то вопросы, не стесняйтесь обращаться в наш магазин и наши специалисты с удовольствием Вам помогут!</p>
                <h4>Удачных покупок!</h4>

              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Size)