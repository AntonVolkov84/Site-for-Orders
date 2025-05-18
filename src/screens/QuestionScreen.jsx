import React from "react";
import "./QuestionScreen.css";
import { useTranslation } from "react-i18next";

function QuestionScreen() {
  const { t } = useTranslation();
  return (
    <div className="questions">
      <div className="block">
        <p className="question">{t("question1")}</p>
        <p className="answer">{t("answer1")}</p>
      </div>
    </div>
  );
}

export default QuestionScreen;
