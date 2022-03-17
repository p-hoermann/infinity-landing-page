import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/termsstyles'
import { Typography } from '@material-ui/core'

export default function Terms() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>
            {t("FOOTERTERMS")}
        </Typography>
        <Typography className={classes.title}>
            {t("TERMSTITLE0")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents} dangerouslySetInnerHTML= { {__html: t("TERMSCONTENT0-1")} }>
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT0-2")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE1")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT1-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT1-2")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE2")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT2-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT2-2")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (3)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT2-3")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (4)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT2-4")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (5)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT2-5")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE3")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT3-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT3-2")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (3)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT3-3")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE4")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT4-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT4-2")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE5")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT5-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents} dangerouslySetInnerHTML= { {__html: t("TERMSCONTENT5-2")} }>
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE6")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT6-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT6-2")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE7")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT7-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT7-2")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE8")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT8-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT8-2")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (3)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT8-3")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (4)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT8-4")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (5)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT8-5")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE9")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT9-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT9-2")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (3)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT9-3")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE10")}
        </Typography>

        <Typography className={classes.title}>
            {t("TERMSTITLE11")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT11-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT11-2")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE12")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT12")}
          </Typography>
        </Grid>

        <Typography className={classes.title}>
            {t("TERMSTITLE13")}
        </Typography>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (1)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT13-1")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (2)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT13-2")}
          </Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>
            (3)
          </Typography>
          <Typography className={classes.contents}>
            {t("TERMSCONTENT13-3")}
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}
