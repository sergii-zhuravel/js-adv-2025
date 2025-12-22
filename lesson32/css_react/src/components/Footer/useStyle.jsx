import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  footer: {
    backgroundColor: theme.colorPrimary,
  },
  bigText: (props) => {
    return {
      fontSize: props.big ? 60 : "40px",
    };
  },
  myCoolClass: {},
}));
