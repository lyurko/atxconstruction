// @flow
import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import HomeImg from '../../assets/home.jpg';
import DesignImg from '../../assets/tools.jpg';
import CraneImg from '../../assets/cranes.jpg';
import WeldingImg from '../../assets/welding.jpg';

import './index.css';

export function Home() {
  return (
    <div className="home">
      <section className="about" id="about">
        <Grid
          container
          spacing={24}
          alignItems='center'
          justify='center'
        >
          <Grid item>
            <h1>About ATX Construction</h1>
            <p>
              In 2017 two partners set out to execute an idea they believed would bring a new vision of value and trust in the ever-growing development all around our communities.
              By combining their vast experience in construction they set out with a vision which embraced the growth of relationships and the importance of accepting nothing less than excellent craftsmanship
              in all projects. We strive to build trust and satisfaction with all our clients by maintaining the highest accountability within the ATX Construction family and its valued partners.
              We believe all clients deserve our absolute best and will work diligently to ensure the entire process from start to completion is held to the highest standards and look forward to repeat business relationships.
            </p>
            <p>
              We take our clients vision and make it our goal to surpass expectations with our meticulous work ethic and careful focus on every detail, every step of the way.
              Our pride does not only lie with our craftsmanship, but with our inspirational creativity on every carefully designed project to uphold functionality
              and aesthetics while diligently maintaining budget costs as planned. Most importantly, ATX Construction strictly manages safety standards on all project sites.
              Combined with our ability to communicate with full transparency between all our subcontractors and clients, we feel our services will create valued relationships which will last well beyond our projects.
              We look forward to starting a journey with your vision and building a positive and lasting relationship.
            </p>
            <div className="email">
              <p>
                We look forward to hearing from you!
              </p>
              <Button className="btn" href="mailto:info@atxconstruction.com" target="_top">Contact Us</Button>
            </div>
          </Grid>
        </Grid>
      </section>
      <section id="services">
        <h1>Services</h1>
        <Grid
          container
          spacing={24}
          style={{padding: 24}}
          alignItems='center'
          justify='center'
        >
          <Grid item sx={12} sm={6} lg={4} align="center">
            <Card className="card">
              <CardMedia
                image={DesignImg}
                title="Pre-Construction Services"
                className="media"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Pre-Construction Services
                </Typography>
                <Typography component="p">
                  Budgeting, Lead Time Procurement, Cost Reduction Planning, Scheduling
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={12} sm={6} lg={4} align="center">
            <Card className="card">
              <CardMedia
                image={HomeImg}
                title="General Contractors"
                className="media"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  General Contracting
                </Typography>
                <Typography component="p">
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={12} sm={6} lg={4} align="center">
            <Card className="card">
              <CardMedia
                image={CraneImg}
                title="Construction Management at Risk CMAR"
                className="media"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Construction Management at Risk CMAR
                </Typography>
                <Typography component="p">
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} align="center">
            <Card className="card">
              <CardMedia
                image={WeldingImg}
                title="Design Build"
                className="media"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Design Build
                </Typography>
                <Typography component="p">
                  Optimize cost and functionality from start to end
                  Work directly with design teams
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      <section id="contact">
        <h1>Contact Us</h1>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={6} align="center">
            <p>ATX Construction</p>
            <p>1003 Rio Grande Street</p>
            <p>Austin, Texas 78701</p>
            <a href="mailto:info@atxconstruction.com" target="_top">info@atxconstruction.com</a>
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.7100365596502!2d-97.74992788487947!3d30.273841981799404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50c99e10491%3A0x7f533588796bd16a!2s1003+Rio+Grande+St%2C+Austin%2C+TX+78701!5e0!3m2!1sen!2sus!4v1533601014545"
              width="400" height="450" frameBorder="0" allowFullScreen></iframe>
          </Grid>
        </Grid>


      </section>
    </div>
  )
}

export default connect(null, null)(Home);