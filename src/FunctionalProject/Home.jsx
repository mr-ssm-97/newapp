import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
console.log("Home is called!");
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
      loding: false,
    };
  }
  async getApiData() {
    console.log("getApiData() called!");
    this.setState({ ...this.state, loding: true });
    console.log("loding state changed to true");
    var response = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&sortBy=publishedAt&language=${this.props.lan}&apiKey=d3be0bce763542eeac18192f6076c342`
    );
    response = await response
      .json()
      .finally(this.setState({ ...this.state, loding: false }));
    console.log("loding state changed to false");
    this.setState({
      articles:
        response.status === "ok" &&
        response.articles.filter((x) => x.title !== "[Removed]"),
      totalResults: response.totalResults,
    });
    console.log("Articles and totalResults updated!");
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    var response = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&sortBy=publishedAt&language=${this.props.lan}&apiKey=d3be0bce763542eeac18192f6076c342`
    );
    response = await response.json();

    if (response.articles) {
      this.setState({
        articles: this.state.articles.concat(
          response.status === "ok" &&
            response.articles.filter((x) => x.title !== "[Removed]")
        ),
        totalResults: response.totalResults,
      });
    }
  };
  componentDidMount() {
    this.getApiData();
  }
  componentDidUpdate(old) {
    if (this.props !== old) this.getApiData();
    console.log(this.props);
  }

  render() {
    console.log("Home inside the render called called");
    return this.state.loding ? (
      <Box
        sx={{
          display: "flex",
          height: "150px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    ) : (
      <>
        <Box
          sx={{
            height: "50px",
            color: "white",
            backgroundColor: "primary.main",
            margin: "4px 0",
            // fontSize: "larger",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{this.props.q} News Article</Typography>
        </Box>
        <Box sx={{ padding: "0 20px 0 70px" }}>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={
              this.state.articles &&
              this.state.articles.length < this.state.totalResults
            }
            loader={
              <Box
                sx={{
                  display: "flex",
                  height: "150px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            }
            // endMessage={
            //   <p style={{ textAlign: "center", margin: "20px" }}>
            //     <b>No More Content Available</b>
            //   </p>
            // }
          >
            <Grid container spacing={2}>
              {/* <p>{"Articles : " + this.state.articles[0]}</p> */}
              {this.state.articles &&
                this.state.articles.map((item, index) => {
                  return (
                    <NewsItem
                      pic={
                        item.urlToImage
                          ? item.urlToImage
                          : `/images/noimage.png`
                      }
                      title={item.title}
                      description={item.description}
                      url={item.url}
                      source={item.source ? item.source.name : "Not available"}
                      date={item.publishedAt}
                      key={index}
                    />
                  );
                })}
            </Grid>
          </InfiniteScroll>
        </Box>
      </>
    );
  }
}
