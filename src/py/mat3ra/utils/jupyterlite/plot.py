from typing import Any, Callable, Dict, List, Optional, Tuple

import matplotlib.pyplot as plt
import numpy as np
import plotly.graph_objs as go
from plotly.subplots import make_subplots


def scatter_plot_2d(
    x_values: List[float],
    y_values: List[float],
    hover_texts: List[str],
    settings: Dict[str, Any],
    trace_names: Optional[List[str]] = None,
) -> go.Figure:
    """
    Create a generic 2D scatter plot.

    Args:
        x_values: List of x-coordinates
        y_values: List of y-coordinates
        hover_texts: List of hover texts for each point
        settings: Plot settings including scales, height, and titles
        trace_names: Optional list of names for each trace
    """
    data = []
    for i in range(len(x_values)):
        trace = go.Scatter(
            x=[x_values[i]],
            y=[y_values[i]],
            text=[hover_texts[i]],
            mode="markers",
            hoverinfo="text",
            name=trace_names[i] if trace_names else f"Point {i}",
        )
        data.append(trace)

    layout = go.Layout(
        xaxis=dict(title=settings.get("x_title", "X"), type=settings.get("x_scale", "linear")),
        yaxis=dict(title=settings.get("y_title", "Y"), type=settings.get("y_scale", "linear")),
        hovermode="closest",
        height=settings.get("height", 600),
        title=settings.get("title", ""),
        legend_title_text=settings.get("legend_title", ""),
    )

    return go.Figure(data=data, layout=layout)


def create_realtime_plot(
    title: str = "Real-time Progress", x_label: str = "Step", y_label: str = "Value"
) -> go.FigureWidget:
    """
    Create a real-time updating plot.
    """
    fig = make_subplots(rows=1, cols=1, specs=[[{"type": "scatter"}]])
    scatter = go.Scatter(x=[], y=[], mode="lines+markers", name="Progress")
    fig.add_trace(scatter)
    fig.update_layout(title_text=title, xaxis_title=x_label, yaxis_title=y_label)
    return go.FigureWidget(fig)


def create_update_callback(
    dynamic_object: Any,
    value_getter: Callable,
    figure: go.FigureWidget,
    steps: List[int],
    values: List[float],
    step_attr: str = "nsteps",
    print_format: str = "Step: {}, Value: {:.4f}",
) -> Callable:
    """
    Create a generic update callback for real-time plotting.

    Args:
        dynamic_object: Object containing step information
        value_getter: Function to get the current value
        figure: Plotly figure widget to update
        steps: List to store step counts
        values: List to store measured values
        step_attr: Attribute name for step count in dynamic_object
        print_format: Format string for progress printing
    """

    def update():
        step = getattr(dynamic_object, step_attr)
        value = value_getter()

        steps.append(step)
        values.append(value)

        print(print_format.format(step, value))
        with figure.batch_update():
            figure.data[0].x = steps
            figure.data[0].y = values

    return update


def plot_distribution_function(
    bin_centers: np.ndarray,
    distribution: np.ndarray,
    xlabel: str = "Distance",
    ylabel: str = "g(r)",
    title: str = "Distribution Function",
    figsize: Tuple[int, int] = (8, 5),
) -> None:
    """
    Plot a generic distribution function.
    """
    plt.figure(figsize=figsize)
    plt.plot(bin_centers, distribution, label=title)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.title(title)
    plt.legend()
    plt.grid()
    plt.show()


def plot_3d_surface(
    x_matrix: np.ndarray,
    y_matrix: np.ndarray,
    z_matrix: np.ndarray,
    optimal_point: Optional[Tuple[float, float]] = None,
    title: str = "Surface Plot",
    labels: Optional[Dict[str, str]] = None,
) -> None:
    """
    Create a 3D surface plot with optional optimal point.
    """
    if labels is None:
        labels = {"x": "X", "y": "Y", "z": "Z"}

    fig = go.Figure(data=[go.Surface(x=x_matrix, y=y_matrix, z=z_matrix, colorscale="Viridis")])

    if optimal_point is not None:
        x_opt, y_opt = optimal_point
        z_opt = np.min(z_matrix)
        fig.add_trace(
            go.Scatter3d(
                x=[x_opt], y=[y_opt], z=[z_opt], mode="markers", marker=dict(size=8, color="red"), name="Optimal Point"
            )
        )

    fig.update_layout(
        title=title,
        scene=dict(xaxis_title=labels["x"], yaxis_title=labels["y"], zaxis_title=labels["z"]),
        width=800,
        height=800,
    )
    fig.show()


def plot_2d_heatmap(
    x_values: np.ndarray,
    y_values: np.ndarray,
    z_matrix: np.ndarray,
    optimal_point: Optional[Tuple[float, float]] = None,
    title: str = "Heatmap",
    labels: Optional[Dict[str, str]] = None,
) -> None:
    """
    Create a 2D heatmap with optional optimal point.
    """
    if labels is None:
        labels = {"x": "X", "y": "Y", "z": "Z"}

    fig = go.Figure(
        data=go.Heatmap(x=x_values, y=y_values, z=z_matrix, colorscale="Viridis", colorbar=dict(title=labels["z"]))
    )

    if optimal_point is not None:
        x_opt, y_opt = optimal_point
        fig.add_trace(
            go.Scatter(
                x=[x_opt],
                y=[y_opt],
                mode="markers",
                marker=dict(size=12, color="red", symbol="x"),
                name="Optimal Point",
            )
        )

    fig.update_layout(title=title, xaxis_title=labels["x"], yaxis_title=labels["y"], width=800, height=600)
    fig.show()
