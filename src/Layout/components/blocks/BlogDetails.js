import React from "react";
import {Link} from "react-router-dom";
import Footer from "../Footer";
import "./style/blogBlock.scss";
import {Container, Row, Col} from "react-bootstrap";
import {blogsProducts, ourBlogs} from "../../../api/api";

export default class BlogDetails extends React.Component {
  state = {name: "", email: "", website: "", comment: ""};

  handleChange(event) {
    this.setState({
      name: event.target.value,
      email: event.target.value,
      website: event.target.value,
      comment: event.target.value
    });
  }

  render() {
    const {id} = this.props.match.params;
    return (
        <div>
          <div className="blog-section">
            <ol className="breadcrumb" style={{background: "transparent"}}>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="breadcrumb-item">
                <p className="p-0 m-0">{ourBlogs[id - 1].title}</p>
              </li>
            </ol>
            <Container>
              <Row>
                <Col md={8} lg={9}>
                  <div className="blogs-container">
                    <div key={ourBlogs[id - 1].id} className="the-blog">
                      <div className="img-wrapper">
                        <img
                            className="w-100"
                            src={ourBlogs[id - 1].img}
                            alt="blog"
                        />
                      </div>
                      <div className="blog-information">
                        <h4>
                          {ourBlogs[id - 1].title}
                        </h4>
                        <div className="info">
                          <span>By Admin</span>
                          <span className="border-rl">{ourBlogs[id - 1].blogType}</span>
                          <span className="date border-r">{ourBlogs[id - 1].date}</span>
                          <span>8 Comments</span>
                        </div>
                        <p className="blog-story story">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                          sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet tempor magna. Donec
                          eros sem, porta eget leo et, varius eleifend mauris. Donec eu leo congue, faucibus quam eu,
                          viverra mauris. Nulla consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin vel
                          magna vel neque porta ultricies non eget mauris. Suspendisse potenti.</p>
                        <p className="blog-story story">Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu
                          nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et
                          malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis
                          in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit
                          a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra
                          tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget
                          tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu
                          euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis,
                          vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus,
                          fermentum imperdiet purus eu, ornare ornare libero.</p>
                      </div>
                      <div className="blog-tags">
                        <h5>Tags</h5>
                        <div>
                          <Link to={`/blog-details/${id}`}>{ourBlogs[id - 1].firstTag}</Link>
                          <Link to={`/blog-details/${id}`}>{ourBlogs[id - 1].secTag}</Link>
                          {
                            (ourBlogs[id - 1].fifthTag) ?
                                <Link to={`/blog-details/${id}`}>{ourBlogs[id - 1].tags.fifthTag}</Link> :
                                (ourBlogs[id - 1].forthTag) ?
                                    <Link to={`/blog-details/${id}`}>{ourBlogs[id - 1].tags.forthTag}</Link> :
                                    (ourBlogs[id - 1].thirdTag) ?
                                        <Link to={`/blog-details/${id}`}>{ourBlogs[id - 1].tags.thirdTag}</Link> : ''
                          }
                        </div>
                      </div>
                      <div className="leave-comment">
                        <h4>leave a comment</h4>
                        <h6>Your email address will not be published. Required fields are marked *</h6>
                        <div className="comment-form">
                       <textarea
                           name="comment"
                           rows="5"
                       />
                          <input type="text" name="name" placeholder="Name*"/>
                          <input type="text" name="email" placeholder="Email*"/>
                          <input type="text" name="website" placeholder="Website*"/>
                          <div className="post-comment-btn">
                            <button>Post Comment</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} lg={3}>
                  <div className="d-flex flex-column">
                    <div className="search-input">
                      <input type="search" placeholder="Search"/>
                      <i className="fas fa-search"></i>
                    </div>
                    <div className="all-categories">
                      <h3>Categories</h3>
                      <ul className="list-unstyled">
                        <li className="border-tb">
                          <Link to="/blog">Fashion</Link>
                        </li>
                        <li>
                          <Link to="/blog">Beauty</Link>
                        </li>
                        <li className="border-tb">
                          <Link to="/blog">Street Style</Link>
                        </li>
                        <li>
                          <Link to="/blog">Life Style</Link>
                        </li>
                        <li className="border-tb">
                          <Link to="/blog">DIY & Crafts</Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="featured-products list-unstyled">
                      {blogsProducts.map(({id, img, price, title}) => (
                          <li key={id} className="fp-product">
                            <div className="img-container">
                              <img src={img} alt="product"/>
                            </div>
                            <div className="details">
                              <a href="/">{title}</a>
                              <span>{price}</span>
                            </div>
                          </li>
                      ))}
                    </ul>
                    <ul className="list-unstyled archive">
                      <h3>Archive</h3>
                      <li>
                        <Link to="/blog">July 2018</Link>
                        <span>(9)</span>
                      </li>
                      <li>
                        <Link to="/blog">June 2018</Link>
                        <span>(39)</span>
                      </li>
                      <li>
                        <Link to="/blog">May 2018</Link>
                        <span>(49)</span>
                      </li>
                      <li>
                        <Link to="/blog">April 2018</Link>
                        <span>(49)</span>
                      </li>
                      <li>
                        <Link to="/blog">March 2018</Link>
                        <span>(29)</span>
                      </li>
                      <li>
                        <Link to="/blog">February 2018</Link>
                        <span>(19)</span>
                      </li>
                      <li>
                        <Link to="/blog">January 2018</Link>
                        <span>(59)</span>
                      </li>
                      <li>
                        <Link to="/blog">December 2017</Link>
                        <span>(69)</span>
                      </li>
                    </ul>
                    <div className="tags">
                      <h3>Tags</h3>
                      <div className="all-tags">
                        <Link to="/blog">Fashion</Link>
                        <Link to="/blog">LifeStyle</Link>
                        <Link to="/blog">Denim</Link>
                        <Link to="/blog">StreetStyle</Link>
                        <Link to="/blog">Crafted</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer/>
        </div>
    );
  }
};
