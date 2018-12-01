import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// @ts-ignore
import ReactMarkdown from "markdown-to-jsx";
import * as React from "react";

const styles = (theme: any) => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
});

const options = {
  overrides: {
    h1: { component: (props: any) => <Typography gutterBottom={true} variant="h4" {...props} /> },
    h2: { component: (props: any) => <Typography gutterBottom={true} variant="h6" {...props} /> },
    h3: { component: (props: any) => <Typography gutterBottom={true} variant="subtitle1" {...props} /> },
    h4: { component: (props: any) => <Typography gutterBottom={true} variant="caption" paragraph={true} {...props} /> },
    li: {
      component: withStyles(styles)(({ classes, ...props }: any) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
    p: { component: (props: any) => <Typography paragraph={true} {...props} /> },
  },
};

function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;
