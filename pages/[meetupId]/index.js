import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        date={props.meetupData.date}
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://nazirasabyt:bR7SxT9QJiraqQ5z@cluster0.9ejdnsd.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://nazirasabyt:bR7SxT9QJiraqQ5z@cluster0.9ejdnsd.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  // const year = props.date.toDate().getFullYear();

  // const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
  //   props.date
  // );
  // const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(
  //   props.date
  // );

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        date: selectedMeetup.date,
      },
    },
  };
}

export default MeetupDetails;
