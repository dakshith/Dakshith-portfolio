import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Admin from "@/pages/admin";
import Layout from "@/components/Layout";
import { ThemeProvider } from "./context/theme-context";
import { LanguageProvider } from "./context/language-context";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Router />
          <Toaster />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
