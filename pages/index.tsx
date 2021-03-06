import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Footer, Header, PlanItem } from "../components/";
import { AddPlan, ListPlans } from "../containers/";
import { PlanDetail } from "../types";

const Home: NextPage = () => {
  const [plans, setPlans] = useState<PlanDetail[]>([]);

  useEffect(() => {

    fetch(`/api/planner`).then(res => res.json()).then(result => setPlans(result.plans))

    return () => {}
  }, []);

  const addPlan = async (text: PlanDetail['text']) => {
    if (text && text.length > 0) {
      const body = {
        text
      }

      fetch('/api/planner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(res => res.json()).then(result => setPlans([...plans, result?.plans]))
    }
  };

  const deletePlanItem = async (plan: PlanDetail) => {
    if (confirm("Do you really want to delete this item?")) {
      const body = {id: plan._id}
      fetch(`/api/planner`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const newTodos = plans.filter((_plan: PlanDetail) => _plan._id !== plan._id);
      setPlans(newTodos);
    }
  };

  const editPlanItem = async (plan: PlanDetail) => {
    const newPlanText = prompt("Enter new todo text or description:");
    if (newPlanText != null) {
      const body = {
        text: newPlanText,
        id: plan._id
      }
      fetch('/api/planner', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(res => res.json()).then(result => {
        const moddedTodos = plans.map((_plan) => {
          if (_plan._id === plan._id) {
            return result?.plans;
          } else {
            return _plan;
          }
        });
        setPlans(moddedTodos);
      })
      
    }
  };

  return (
    <div>
      <Head>
        <title>Allio Fintech Day Planner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <AddPlan addPlan={addPlan} />
        <ListPlans
          plan={plans}
          deletePlanItem={deletePlanItem}
          editPlanItem={editPlanItem}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
