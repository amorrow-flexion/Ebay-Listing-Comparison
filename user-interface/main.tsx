import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const cases = [
  { id: 1, title: "Case 1", status: "Open" },
  { id: 2, title: "Case 2", status: "Closed" },
  { id: 3, title: "Case 3", status: "Pending" },
];

function CaseList() {
  const [caseList, setCaseList] = useState(cases);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Case Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseList.map((c) => (
          <Card key={c.id}>
            <CardContent>
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p>Status: {c.status}</p>
              <Button className="mt-2">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaseList />} />
      </Routes>
    </Router>
  );
}

export default App;
