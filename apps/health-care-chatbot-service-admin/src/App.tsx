import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SymptomList } from "./symptom/SymptomList";
import { SymptomCreate } from "./symptom/SymptomCreate";
import { SymptomEdit } from "./symptom/SymptomEdit";
import { SymptomShow } from "./symptom/SymptomShow";
import { PredictionList } from "./prediction/PredictionList";
import { PredictionCreate } from "./prediction/PredictionCreate";
import { PredictionEdit } from "./prediction/PredictionEdit";
import { PredictionShow } from "./prediction/PredictionShow";
import { DiseaseList } from "./disease/DiseaseList";
import { DiseaseCreate } from "./disease/DiseaseCreate";
import { DiseaseEdit } from "./disease/DiseaseEdit";
import { DiseaseShow } from "./disease/DiseaseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DiagnosisList } from "./diagnosis/DiagnosisList";
import { DiagnosisCreate } from "./diagnosis/DiagnosisCreate";
import { DiagnosisEdit } from "./diagnosis/DiagnosisEdit";
import { DiagnosisShow } from "./diagnosis/DiagnosisShow";
import { InteractionList } from "./interaction/InteractionList";
import { InteractionCreate } from "./interaction/InteractionCreate";
import { InteractionEdit } from "./interaction/InteractionEdit";
import { InteractionShow } from "./interaction/InteractionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HealthCareChatbotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Symptom"
          list={SymptomList}
          edit={SymptomEdit}
          create={SymptomCreate}
          show={SymptomShow}
        />
        <Resource
          name="Prediction"
          list={PredictionList}
          edit={PredictionEdit}
          create={PredictionCreate}
          show={PredictionShow}
        />
        <Resource
          name="Disease"
          list={DiseaseList}
          edit={DiseaseEdit}
          create={DiseaseCreate}
          show={DiseaseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Diagnosis"
          list={DiagnosisList}
          edit={DiagnosisEdit}
          create={DiagnosisCreate}
          show={DiagnosisShow}
        />
        <Resource
          name="Interaction"
          list={InteractionList}
          edit={InteractionEdit}
          create={InteractionCreate}
          show={InteractionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
