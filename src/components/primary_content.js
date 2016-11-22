import React from 'react';
import styles from '../styles/style.scss';

export default function PrimaryContent() {
    return(
        <div className="container-fluid primary-content-container" id='mission'>

          <div className='col-md-8 mission-content'>
            <article>
                <h2>The Mission</h2>
                <p>A two week driving expedition working our way anti-clockwise around the rockies. Our adventure begins in Vancouver, from there we head
                south to Victoria for a brief visit before heading up to Kelowna and the Okanagan valley. Continuing on we shall be venturing to Golden and Lake Louise. After Lake Louise is a short drive to Jasper taking in the sights of the glacier fields en route. From Jasper we make our way back to Vancouver with a short stop off at Kamloops to complete the journey. </p>
                <a href="https://goo.gl/maps/sncXyNurH8R2" target="_blank"><img src="src/assets/map.png" className='img-responsive' alt="map image"/></a>
            </article>
          </div>

          <div className='col-sm-4 itinerfireay-list'>
              <h2>Itinerary</h2>
              <p>A breakdown of our trip in detail</p>
              <div className="panel-group" id="accordion">

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Vancouver 6th - 9th</a>
                    </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse">
                    <div className="panel-body">
                      <div className="panel-body">Whilst in Vancouver we will be staying at the <a href='http://www.pinnaclepierhotel.com/' target="_blank">Pinnacle at the Pier</a> Hotel on
                        the north side of the river. We hope to take a day trip to Squamish.</div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Victoria 9th - 11th</a>
                    </h4>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body">Whale watching on the 10th and seeing what else this area has to offer. We will be staying at the <a href='http://www.thecraigmyle.com/' target="_blank">Craigmyle Hotel</a></div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Kelowna 11th - 13th</a>
                    </h4>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body">Wine tasting in a <a href='https://www.vintagewinetours.ca/' target="_blank">1956 Cadillac Sedan de Ville.</a> We are staying in the <a href="http://www.hoteleldoradokelowna.com/" target="_blank">Hotel Eldorado</a></div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Golden 13th - 15th</a>
                    </h4>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse">
                    <div className="panel-body">Seeing some grizzly bears and staying in a <a href='http://www.moberlylodge.com/' target="_blank">pine cabin.</a></div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Lake Louise 15th - 16th</a>
                    </h4>
                  </div>
                  <div id="collapse5" className="panel-collapse collapse">
                    <div className="panel-body">Taking in the sights on the way and also staying in a very nice looking
                      hotel on Emerald lake. <a href='https://www.crmr.com/emerald/' target="_blank">Emerald Lake Lodge</a>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">Jasper 16th - 18th</a>
                    </h4>
                  </div>
                  <div id="collapse6" className="panel-collapse collapse">
                    <div className="panel-body">Time to explore the mountains and the ice fields whilst staying in the <a href='http://jasperhousebungalows.com/' target="_blank">Jasper House Bungalows</a></div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">Kamloops 18th - 19th</a>
                    </h4>
                  </div>
                  <div id="collapse7" className="panel-collapse collapse">
                    <div className="panel-body">Some much needed rest after a long drive, probably some relaxing in the hotel sauna and spa. <a href='https://www.coasthotels.com/hotels/bc/kamloops/coast-kamloops-hotel-and-conference-centre/' target="_blank">The Coast</a> will be our place of residence</div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">Vancouver 19th - 20th</a>
                    </h4>
                  </div>
                  <div id="collapse8" className="panel-collapse collapse">
                    <div className="panel-body">Time to re-visit Vancouver for our last night. We picked a <a href='http://www.lhermitagevancouver.com/' target="_blank">swanky</a> hotel for the
                      last night!
                     </div>
                  </div>
                </div>
              </div>
          </div>

          <hr />
        </div>
    );
}
