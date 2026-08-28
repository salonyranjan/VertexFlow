import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("VertexFlow render error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error" role="alert">
          <p>VertexFlow encountered a rendering problem.</p>
          <h1>Let’s get you back into the experience.</h1>
          <button onClick={() => window.location.reload()}>Reload portfolio</button>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
