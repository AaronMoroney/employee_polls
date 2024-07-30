import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { getQuestions } from "entities/questions/model/actions";
import { AppState } from "app/providers/with-redux/types";
import { QuestionsAction } from "entities/questions/model/types";
import PollsSwitch from "features/polls/ui/PollsSwitch";
import PollsCard from "features/polls/ui/PollsCard";

const styles = {
  polls__page__header: {
    display: "flex",
    flexDirextion: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  polls__page__container: {
    height: "95%",
    overflow: "overlay",
    "&::-webkit-scrollbar": {
      width: "1px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  },
};

const Poll = () => {
  const [isFiltered, setIsFiltered] = useState(true);

  const dispatch = useDispatch<ThunkDispatch<{}, {}, QuestionsAction>>();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const questions = useSelector((state: AppState) => state.questions.questions);

  const handleIsFiltered = () => {
    setIsFiltered(!isFiltered);
  };

  return (
    <>
      <Box sx={styles.polls__page__header}>
        <Typography variant="h4" gutterBottom>
          Polls
        </Typography>
        <PollsSwitch onClick={handleIsFiltered} />
      </Box>
      <Box sx={styles.polls__page__container}>
        {(questions ? Object.keys(questions) : []).map((question) => {
          return <PollsCard key={question} question={questions[question]} />;
        })}
      </Box>
    </>
  );
};

export default Poll;
