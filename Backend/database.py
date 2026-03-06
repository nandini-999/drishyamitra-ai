from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

DATABASE_URL = "sqlite:///drishyamitra.db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()


class Photo(Base):

    __tablename__ = "photos"

    id = Column(Integer, primary_key=True)
    path = Column(String)


Base.metadata.create_all(engine)


def save_photo(path):

    session = SessionLocal()

    photo = Photo(path=path)

    session.add(photo)

    session.commit()

    session.close()