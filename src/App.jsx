import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdbIcon from "@material-ui/icons/Adb";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

import UserContext from "./context/UserContext";

import { ThemeProvider } from "@material-ui/core";
import darkTheme from "./theme/dark";
import lightTheme from "./theme/light";

import Layout from "./layout";
import Exercise from "./components/Exercise";
import Dashboard from "./components/Dashboard";
import MealPlan from "./components/MealPlan";
import HealthCareAI from "./components/HealthCareAI";

const componentList = [
  {
    name: "Dashboard",
    url: "/",
    component: Dashboard,
    icon: DashboardIcon,
  },
  {
    name: "Meal Plan",
    url: "/meal-plan",
    component: MealPlan,
    icon: FastfoodIcon,
  },
  {
    name: "HealthCare AI",
    url: "/health-care-AI",
    component: HealthCareAI,
    icon: AdbIcon,
  },
  {
    name: "Exercise",
    url: "/exercise",
    component: Exercise,
    icon: AccessibilityNewIcon,
  },
];

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: {
      FIRST: "Avishek",
      LAST: "Mondal",
      POINTS: 489,
      CALORIE: 112,
      HEALTHCARE_EXPENSES: "$87,897",
      HEALTHCARE_COVERAGE: "$45,129",
    },
  });
  const [currentTheme, setCurrentTheme] = useState(false);

  return (
    <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Switch>
            <Layout
              setCurrentTheme={setCurrentTheme}
              currentTheme={currentTheme}
              componentList={componentList}
            >
              {componentList.map((item, key) => (
                <Route
                  path={item.url}
                  key={key}
                  exact={true}
                  component={item.component}
                />
              ))}
            </Layout>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
