FROM python

EXPOSE 8080

COPY . /app

WORKDIR /app

RUN python -m pip install --upgrade pip

RUN pip install -r /app/requirement.txt

RUN pip install --upgrade google-api-python-client 

RUN python predictor_api.py

ENTRYPOINT ["python"]

CMD ["app.py"]